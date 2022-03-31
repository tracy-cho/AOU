import React from "react";

import "./MemberDetailPage.scss";
import { useRecoilValueLoadable } from "recoil";
import {
  asyncGetMemberList,
  asyncGetRelative,
  memberType
} from "../lib/store/qna";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MemberGutter } from "components/atom/MemberGutter";
import { MemberTab } from "components/atom/MemberTab";

export type MemberDetail3PageProps = {
  cx?: string;
};
const useMember = (name: string) => {
  const { state, contents } = useRecoilValueLoadable(
    asyncGetMemberList({ page: 3 })
  );
  const relative = useRecoilValueLoadable(asyncGetRelative({ name, page: 3 }));
  if (state === "hasValue" && relative.state === "hasValue") {
    const a = {
      state,
      contents: {
        ...contents.find((i: memberType) => i.key_name === name),
        관계: relative.contents?.desc.reduce((a: any, c: any, idx: number) => {
          if (idx === 0) return a;
          if (!!c) {
            if (!c.v) return a;
            a.push({
              display_name: contents.find(
                (i: memberType) => i.key_name === relative.contents?.nameList[idx].v
              )?.code_name,
              name: relative.contents?.nameList[idx].v,
              text: c.v
            });
          }
          return a;
        }, [])
      }
    };
    return a;
  }
  return { state: "hasError", contents: {} };
};

const type = (type: string) => {
  switch (type) {
    case "옵세르보":
      return "o";
    case "레크레아티":
      return "r";
    case "운트라":
      return "u";
    case "디솔루티":
      return "d";
    default:
      return "";
  }
};

export const MemberDetail3Page: React.FC<MemberDetail3PageProps> = ({
                                                                      cx = ""
                                                                    }) => {
  const location = useLocation();
  const { state, contents } = useMember(
    decodeURIComponent(location.pathname.split("/")[2])
  );

  if (state !== "hasValue") return null;
  return (
    <main className={`MemberDetailPage ${cx}`}>
      <MemberTab page={3} name={contents.key_name} />
      <section className={`short-info ${type(contents.계통)}`}>
        <div className="name">
          <div className="left">{contents.code_name}</div>
          <div className="position u">
            <img
              src="data:img/png;base64,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"
              alt=""
            />
          </div>
          <div className="position d">
            <img
              src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABhCAMAAADr5N8fAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAADAFBMVEX/AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP//AP////+Jj+cjAAAA/nRSTlMAeSmRM5k4pkCzTcBZzmgB2nEJ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"
              alt=""
            />
          </div>
          <div className="position r">
            <img
              src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABUCAMAAABZeoJFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC91BMVEWDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8qDk8r///+o+fXTAAAA+3RSTlMASs+kSwUIUarOPoPNXgRm03ERDA960MhAywsO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"
              alt=""
            />
          </div>
          <div className="position o">
            <img
              src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABvCAMAAAAt+5WlAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC9FBMVEXyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSLyZSL////AKOyZAAAA+nRSTlMAaLcbH/eXR8xJzUhCyw/BnxwdVoK+8JVvOwdZxWwY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"
              alt=""
            />
          </div>
          <div className={`right ${contents.소속 === "솔리더리타스"}`}>
            {contents.이름}
          </div>
        </div>
        <div className="catch">
          "<span>{contents.한마디}</span>"
        </div>
        <div className="info">
          <span>{contents.소속}</span>|<span>{contents.나이} </span>|
          <span>{contents.성별}</span>|<span>{contents.키} cm</span>
        </div>

        <div className="status-wrapper">
          <div className={"status"}>
            <span>체력</span>
            <span className={"number"}>{contents.체력}</span>
          </div>
          <div className="status">
            <span>공격력</span>
            <span className={"number"}>{contents.공격력}</span>
          </div>
          <div className="status">
            <span>방어력</span>
            <span className={"number"}>{contents.방어력}</span>
          </div>
          <div className="status">
            <span>통찰</span>
            <span className={"number"}>{contents.통찰}</span>
          </div>
          <div className="status">
            <span>정신력</span>
            <span className={"number"}>{contents.정신력}</span>
          </div>
        </div>
      </section>

      <section className="skill">
        <svg xmlns="http://www.w3.org/2000/svg" width="160px" height="43px">
          <image
            x="0px"
            y="0px"
            width="160px"
            height="43px"
            href="data:img/png;base64,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"
          />
        </svg>
        {contents.스킬.map((i: string) => (
          <span key={i}>&lt;{i}&gt;</span>
        ))}
      </section>

      <section className={`mime ${type(contents.계통)}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="300px" height="83px">
          <image
            x="0px"
            y="0px"
            width="300px"
            height="83px"
            href="data:img/png;base64,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"
          />
        </svg>

        <span className={"text"}>미메시스</span>
        <span className="mime-name">{contents.미메시스}</span>
        <p>{contents.미메시스설명}</p>
      </section>
      <section className="desc">
        <MemberGutter text={"외형"} cx={type(contents.계통)}>
          {contents.mov && <video style={{maxWidth:'1440px',maxHeight:"1080px",width:"100%"}} autoPlay muted loop>
            <source src={`https://cdn.star-light.space/412.mp4`} type="video/mp4" />
          </video>}
          {contents.이미지 && (
            <div className={"image-wrapper"}>
              {JSON.parse(contents.이미지).map((i: string) => (
                <img
                  src={`https://cdn.star-light.space/${i}.png`}
                  key={i}
                  alt=""
                />
              ))}
            </div>
          )}
          {contents.외형}
        </MemberGutter>{" "}
        <MemberGutter text={"성격"} cx={`${type(contents.계통)} l`}>
          {contents.성격}
        </MemberGutter>{" "}
        <MemberGutter text={"기타사항"} cx={`${type(contents.계통)} l`}>
          {contents.기타사항}
        </MemberGutter>{" "}
        <MemberGutter text={"지난 몇 년간..."} cx={`${type(contents.계통)} l`}>
          {contents.지난}
        </MemberGutter>{" "}
        <MemberGutter text={"마키나"} cx={`${type(contents.계통)} l`}>
          {contents.machina_image && (
            <div className={"image-wrapper"}>
              {JSON.parse(contents.machina_image).map((i: string) => (
                <img
                  src={`https://cdn.star-light.space/${i}.png`}
                  key={i}
                  alt=""
                />
              ))}
            </div>
          )}
          {contents.마키나}
        </MemberGutter>
        <MemberGutter text={"오너 RP 성향"} cx={type(contents.계통)}>
          {contents.rp}
        </MemberGutter>
        <MemberGutter text={"관계"} cx={`${type(contents.계통)} l`}>
          {contents.관계.map(
            ({
               name,
               text,
               display_name
             }: {
              name: string;
              display_name: string;
              text: string;
            }) => (
              <div className={"rel-wrapper"} key={name}>
                <Link to={`/member/${encodeURIComponent(name)}`}>
                  [{display_name}]
                </Link>
                <p> {text}</p>
              </div>
            )
          )}
          <div className={"bottom-text"}>{contents.bottom}</div>
        </MemberGutter>
      </section>
    </main>
  );
};
