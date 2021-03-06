import React from "react";

import { TextBox } from "components/atom/TextBox";
import { Logo } from "components/atom/Logo";

import "./NoticePage.scss";

export type NoticePageProps = {
  cx?: string;
};

export const NoticePage: React.FC<NoticePageProps> = ({ cx = "" }) => {
  return (
    <main className={`NoticePage ${cx}`}>
      <section className="Logo">
        <Logo />
      </section>
      <div className="title">
        <h1>통합공지</h1>
        <TextBox>
          <p id="707b8444-8572-4ba1-b09f-a86485d7bc5d" className="">
            본 커뮤니티는 트위터를 기반으로 한 자작(창작) 캐릭터 커뮤니티입니다.
          </p>
          <p id="543dbf9a-8311-4309-af2f-e2144c675701" className="">
            커뮤니티의 모든 설정과 내용은 실존하는 종교, 단체 및 인물과 아무런
            관련이 없습니다.
          </p>
          <p id="5d042146-1e2a-4b79-9500-d7e304c45192" className="">
            커뮤니티의 스토리 및 세계관은 먼 미래 지구의 대체 역사를 그리고
            있습니다. 이에 등장하는 실존 인물, 지명 및 단체의 이름은 우연이거나
            패러디 혹은 기념(ex. 이순신 홀)임을 밝힙니다.
          </p>
          <p id="9ba58de5-4477-413c-b82c-b1e3f1e493cb" className="">
            본 커뮤니티의 스토리나 세계관 일부에는 현대의 기준에서 부적절한
            윤리와 사상이 존재합니다.
          </p>
          <p id="368e9fc2-3aee-48b5-872b-9d67be74e16a" className="">
            이는 우리가 살아가는 21세기에는 받아들여질 수 없으며 현실과 분리된
            요소임을 밝힙니다.
          </p>
          <p id="7b42d85f-dec3-4076-84e5-013d25155b92" className="">
            또한 커뮤니티의 운영진은 이에 동의하지 않으며 충분한 주의와 경각심을
            가지고 임할 것을 약속드립니다.
          </p>
          <h5>신청 전 주의사항</h5>
          <div className="sub-wrapper">
            <p id="46e88a40-6b26-410a-8c15-0484bbc28534" className="">
              본 커뮤니티는 리뉴얼 기간을 제외하고 최소 9주의 긴 일정을 러닝
              기간으로 하고 있습니다.. 불가피한 사정으로 러닝 기간에 다소간의
              오차가 발생할 수 있으나, 가능한 일정에 따라 진행될 예정입니다.
            </p>
            <p id="e504256c-4bc2-4999-9a8a-3669e1c43f97" className="">
              따라서 아카데미 가족 한 분 한 분의 참여가 중요하오니, 프로젝트
              참가 신청서를 제출하시기 전 일정을 확인하시고 이에 지장이 없는지
              재고하여주시기 바랍니다.
            </p>
            <p id="36d5eb16-279d-4235-a5aa-21d0c53fbdff" className="">
              본 커뮤니티의 신청 가능 대상은 02년 이전 출생자입니다. 빠른 년생은
              인정하지 않습니다. 프로젝트 진행 도중의 내용이나 연출 등을 고려한
              요소이오니 양해 부탁드립니다.
            </p>
            <p id="fda11a99-f027-4fe9-994b-d9ff8bfec651" className="">
              또한 수위 제한은 방송통신위원회의 기준을 따르며 아래와 같이
              제한하고 있습니다.
            </p>
            <p id="e4842ec4-357b-47e9-8046-b8fe747805cc" className="">
              [성장전]
              <table>
                <thead>
                <tr>
                  <th />
                  <th>노출</th>
                  <th>성행위</th>
                  <th>폭력</th>
                  <th>언어</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>4등급</td>
                  <td>성기노출</td>
                  <td>성범죄 또는 노골적인 성행위</td>
                  <td>잔인한 살해</td>
                  <td>노골적이고 외설적인 비속어</td>
                </tr>
                <tr>
                  <td className={"bb"}>3등급</td>
                  <td>전신노출</td>
                  <td>노골적이지 않은 성행위</td>
                  <td className={"bb"}>살해</td>
                  <td className={"bb"}>심한 비속어</td>
                </tr>
                <tr>
                  <td className={"bb"}>2등급</td>
                  <td className={"bb"}>부분노출</td>
                  <td className={"bb"}>착의상태의 성적접촉</td>
                  <td>상해</td>
                  <td>거친 비속어</td>
                </tr>
                </tbody>
              </table>
            </p>
            <p id="df4a44be-07ec-4405-a72e-bb120ba9920f" className="">
              [성장후]
              <table>
                <thead>
                <tr>
                  <th />
                  <th>노출</th>
                  <th>성행위</th>
                  <th>폭력</th>
                  <th>언어</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className={"bb"}>4등급</td>
                  <td className={"bb"}>성기노출</td>
                  <td className={"bb"}>성범죄 또는 노골적인 성행위</td>
                  <td className={"bb"}>잔인한 살해</td>
                  <td className={"bb"}>노골적이고 외설적인 비속어</td>
                </tr>
                <tr>
                  <td>3등급</td>
                  <td>전신노출</td>
                  <td>노골적이지 않은 성행위</td>
                  <td>살해</td>
                  <td>심한 비속어</td>
                </tr>
                <tr>
                  <td>2등급</td>
                  <td>부분노출</td>
                  <td>착의상태의 성적접촉</td>
                  <td>상해</td>
                  <td>거친 비속어</td>
                </tr>
                </tbody>
              </table>
            </p>
            <p id="93e2040d-dd0d-4381-b52e-5c28db6ade14" className="">
              러닝 중 로그의 형식에 대한 제한은 없습니다. 또한 프로필 제출에도
              이미지 첨부의 제한을 두지 않습니다. &#x27;두상&#x27; 및
              &#x27;전신&#x27; 이미지는 필수가 아니며 커뮤니티 진행 중 첫
              1부동안의 계정 인장은 운영진 측에서 포지션 별로 제공하는
              아이콘으로 통일합니다.
            </p>
            <p id="234e09f0-9155-49c5-8f45-6e2337fedfab" className="">
              만일 프로필에 이미지를 첨부하실 경우 직접 제작하지 않으신 모든
              이미지(픽크루, 지원 및 커미션 등)의 출처를 밝혀 주시기를 바랍니다.
            </p>
            <p id="76d15478-d9b2-41d6-9538-e938aba6964f" className="">
              신청서 내 성별 표시는 필수가 아니며, 자유로이 표기해주시되
              공란으로 비워두셔도 괜찮습니다.
            </p>
            <p id="7ddd4437-0139-497b-b28f-8bc174eab432" className="">
              캐릭터 재활용은 가능하나 관계를 정리하지 않은 캐릭터의 러닝을
              금지합니다. 기존의 관계 일체를 정리하고 참가하여 주시길 부탁드리는
              바입니다.
            </p>
            <p id="da49c6a5-a2af-412f-91e1-23db0d4e520f" className="">
              총괄 계정이 문의에 답하는 시간은 20:00~24:00입니다.
            </p>
          </div>
          <h5>러닝 중 주의사항</h5>
          <div className="sub-wrapper">
            <p id="c06bc831-bbd0-4189-9027-99c5d7234f96" className="">
              ▶ 레이드 커뮤니티인만큼 무통보 하차, 잠수, 메인 스토리 진행 불참을
              지양합니다. 만약 부득이한 사정으로 참가가 어려우실 경우 반드시
              총괄계를 통하여 사전에 말씀해주시길 바랍니다.
              <br />
              사전 예고 없이 3회 이상 결석할 경우 경고 1회를 부여하며, 경고 3회
              누적시 활동량 부족으로 제명됩니다.
              <br />
              또한, 러닝 중 48시간 이상 계정에 활동이 없을 경우 디엠으로 총괄계
              측의 문의가 이루어질 수 있음을 안내드립니다.
              <br />
              활동량 부족 등 기타 사유로 하차할 경우 해당 캐릭터는 처음부터
              세계관에 존재하지 않았던 것으로 처리됩니다.
            </p>
            <p id="b337edd8-ac70-46de-966a-c0b710ff627a" className="">
              ▶ 활동 중 스토리 진행 / 조사 / 레이드 / 이벤트 등 멤버의 참여를
              요구하는 이벤트가 있습니다. 기본적인 일정은 다음과 같으며 운영진의
              사정에 따라 소폭 변동될 수 있음을 알려드립니다. <br />
              스토리 진행과 조사는 22시 정각에 시작하며 최대 24시에 종료됩니다.
              이 역시 운영진 및 당일 진행에 따라 소폭 변동될 수 있으며, 이 경우
              사전에 안내드립니다.
              <br />
              레이드는 매주 토요일 22시 정각에 시작되며, 가능한 전 멤버의 참여를
              권장합니다.
              <br />
              또한 본 커뮤니티는 레이드에 앞서 참여자 간의 원활한 토의와 협의를
              통한 전략 수립 및 플레이를 권장합니다.
            </p>
            <p id="0b98351e-7857-4d8d-834e-406291a25531" className="">
              ▶ 특정 주제, 특정 상황, 특정 시간대 등 모든 대화에 있어 타
              캐릭터가 배제될 수 있는 흐름을 각별히 지양해주시기 바랍니다.
            </p>
            <p id="e43e3c17-7767-4a32-9600-3c7a1a77c4db" className="">
              ▶ 성장 후 수위 제한이 해제되는만큼 RP에 주의하여주시기 바라며,
              총괄계를 포함한 DM 조율을 적극 사용하여주시길 바랍니다.
            </p>{" "}
            <p id="e43e3c17-7767-4a32-9600-3c7a1a77c4db" className="">
              ▶ 트리거 워닝이 포함된 로그의 경우 후세터, 프라이베터 등을 포함한
              외부 링크로 연결하여 업로드해주시기 바랍니다.
            </p>
            <p id="e43e3c17-7767-4a32-9600-3c7a1a77c4db" className="">
              ▶ 또한 커뮤니티의 특성에 맞는 진행과 활동을 위해 다음과 같은
              행위들을 명시적으로 금지하고 있습니다. 해당 행위가 발생하였을 경우
              회당 경고 1회를 부여하며, 경고 3회 누적 시 제명 처리됨을
              알려드립니다.
            </p>
          </div>
          <ul
            id="abbdaaa1-76ac-4679-8710-b945295ea28c"
            className="bulleted-list"
          >
            <li>
              본인을 비롯한 타 캐릭터의 스테이터스와 스킬에 대한 효율성 비교 및
              부정적 평가 성격의 발언 및 행동
            </li>
            <li>
              타 캐릭터의 스테이터스와 스킬 선택에 대하여 일방적으로 지시 및
              강요하거나 효율성을 언급하는 행동
            </li>
            <li>
              커뮤니티의 분위기를 해칠 수 있는 메타 발언, 짤방, 초성체, 이모티콘
              등의 사용 (짤방의 트레이싱 역시 지양해주시길 바랍니다.)
            </li>
            <li>
              불가피한 사유가 없는 오너 트윗(불가피한 사유로 오너 트윗을 하게 될
              경우, 캐릭터의 트윗과 구분되는 표시를 활용해주시기 바랍니다.)
            </li>
            <li>
              리스트와 바이오를 통한 대화와 로그 교환, 스페이스 사용(엔딩 전까지
              모든 로그의 교환은 전원이 확인할 수 있는 타임라인에 게시
              부탁드립니다.)
            </li>
            <li>@null, @tos 등 타임라인에 노출되지 않는 계정을 통한 트윗</li>
            <li>
              러닝 시점 현재 연인 관계 설정 및 엔딩 전 고백 로그 및 답 로그
              게시, 혹은 DM을 통한 전달
            </li>
            <li>캐릭터의 자살 로그 및 암시 트윗 일체</li>
            <li>시스템 및 메인 스토리 진행과 동떨어진 사망 등 개인 엔딩</li>
            <li>엔딩 전 참여자 사이의 연락처 교환</li>
            <li>총괄계 및 진행 계정을 포함하지 않은 1:1 DM</li>
            <li>
              엔딩 전 오너 계정에서의 캐릭터 공개, 언급 및 스토리 진행 공개,
              토론
            </li>
          </ul>
          <div className="sub-wrapper">
            <p>
              ▶ 현재진행형인 연애관계를 암시하는 RP를 지양해주시길 부탁드립니다. 캐릭터 간 멘션 타래에서 진행되는 RP의 경우 오너간 합의와 커뮤니티의 수위를 지켜주시는 한 그 영역에 제한이 없으나,
              둘
              이상의 캐릭터 사이의 로맨스적 기류를 상정하는 퍼블릭 반응이나 분위기를 지양해주시길 바랍니다. 운영진 역시 공지 준수에 힘쓰겠으며, 다시 한 번 공지의 준수를 부탁드리는 바입니다.
            </p><p>
            ▶ 3부-4부 사이의 성장 과정에서 캐릭터들의 신체적 손상 설정이 다수 추가되었습니다. 캐릭터들의 신체적 손상 설정 관련 RP와 관련하여 당부드립니다.
          </p>
            <ul>
              <li>
                운영진은 장애(disability)에 관해 사회적 모델의 입장을 견지해왔습니다. 이는 장애와 신체적 손상(impairment)을 구분하며, 신체적 손상으로 인해 장애가 발생하는 것이
                아니라
                손상 내지 다른 신체를 가진 개인이 자유롭게 활동할 수 없도록 배제적으로 구성되어있는 사회적 구조에서 장애가 발생한다는 입장입니다. 청각의 손상을 입은 사람이 수화나 자막 지원이 없는
                대다수의
                방송 앞에서 장애를 경험하는 것은 그 대표적인 예시입니다.
                SF는 이를 효과적으로 극복할 수 있는 하나의 세계관입니다. 따라서 세계관 내 캐릭터들의 주요 활동배경이자 지원기관인 그노시스 아카데미는 '구성원 모두의 비배제적 환경 조성'과 '당사자가
                원하는
                형태의 기술 지원을 위하여 노력'하여 왔으며, 운영진 역시 세계관 내 설정 및 스크립트 작성에 있어 해당 문제를 깊이 반영하고자 노력해왔습니다. 이는 홈페이지의 QnA
                항목과 &lt;그노시스 아카데미
                입학
                수속
                안내문&gt;의
                내용을 통해 캐릭터와 러너 모두에게 이미 제시되었던 사항입니다.
              </li>

              <li>
                그러나 모든 창작물의 창작과 해석은 필연적으로 현실의 사회구조를 그 기반으로 삼게 됩니다. SF의 장르적 이점은 손상을 '기술으로 해결하면 그만인 것'으로 여기게 하기 쉽습니다. 그러나
                그러한 기술은 사회구조를 변화시키기보다는 손상을 입은 시민을 '치유'하는 방향으로 작동합니다. 이는 장애의 경험을 사회적인 것이 아닌 개인적인 것으로 만드는 데에 기여합니다. 나아가
                손상으로
                인해 장애를 경험하는 당사자는 우리 주변의 현실에 존재하며, 장애 당사자의 손상과 관련된 삶의 경험이 기술으로 인해 온전히 해결된다고 할 수도 없습니다.
                따라서 손상 및 기술을 통한 장기의 대체 등은 가벼운 문제가 될 수 없고, 캐릭터성의 어필이나 RP의 연출 등에 있어서도 대상화를 경계하며 깊은 주의를 기울여야 하는 문제라고 운영진은
                판단합니다. 즉, 손상의 원인(사고 등)이 아닌 손상 그 자체가 동정이나 시혜의 대상이 되지도 않아야 하지만, 손상을 입은 사실 및 신체에 대한 기술의 개입이 캐릭터들에 의해 아무런
                문제도 아닌
                것처럼 평가되거나 '나는 OO를 다쳤는데 고쳤다~' 식의 자랑의 대화거리와 같이 사용되는 일도 경계되어야 합니다.
              </li>

              <li>모두 실수를 하고, 모두 알지 못하는 부분들이 있습니다. 그러나 우리가 도덕적인 무결성을 추구하지는 않더라도, 잠시 문제에 대해 생각하는 시간을 갖고 기존의 언행으로부터 시도를 하는
                것만으로도 동료 시민의 삶과 경험을 보다 무게 있게 받아들이고 이해할 수 있는 기회를 얻을 수 있으리라 생각합니다.
              </li>
            </ul>
            <p>

              ▶ 긴 시간 동안 함께 해주셔서 감사드립니다. 운영진 역시 모든 참여자가 남은 기간 동안 편안히 참여할 수 있도록 최선을 다하겠습니다.
            </p>
          </div>
        </TextBox>
      </div>
      <div className="title">
        <h1>성장안내사항</h1>
      </div>
      <TextBox>
        <p id="97764cbc-b923-4077-8020-f051be1119bb" className="">
          ▶ 본 커뮤니티의 9주 기간 동안 캐릭터는 여러 가지 상황에서 성장하거나
          변화하게 됩니다. 이에 따라 멤버 여러분들께서는 캐릭터의 변화와 성장을
          반영한 새로운 프로필을 작성하게 되실 예정입니다. 대략적인 기간은 2월
          셋째 주와 3월 마지막 주입니다.
        </p>
        <p id="439e535e-b94f-427f-a5ac-e1f968937b3b" className="">
          ▶ 커뮤니티 진행 중 총 3번(필수 프로필 제출 2회+선택 제출1회)의
          프로필을 제출하게 됩니다. 리뉴얼 프로필 작성에 필요한 세계관의 변화나
          대략적인 타임라인, 캐릭터 메이킹 가이드는 리뉴얼 프로필 작성 기간 전
          공개될 예정입니다.
        </p>
        <p id="6cb4bfb1-e779-41d3-ba67-25c19941dd21" className="">
          ▶ 리뉴얼 기간 중 새로운 스킬 슬롯이 열리거나, 캐릭터의 스테이터스
          일부가 영구적으로 상승 혹은 하락할 수 있습니다.
        </p>
        <p id="b3e2ad39-79df-40da-86b7-88881e3dfbe1" className="">
          ▶ 신청서를 포함한 모든 프로필의 외관 및 기타 설명을 위한 이미지 첨부는
          선택사항입니다.
        </p>
        <p>▶ 총 3번의 리뉴얼 프로필 일정 및 필수 여부는 다음과 같습니다.</p>
        <p>
          <table>
            <thead>
            <tr>
              <th>리뉴얼</th>
              <th>필수 여부</th>
              <th>기간</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                첫 번째 프로필
                <br />
                (1부 &gt; 2부)
              </td>
              <td>필수</td>
              <td>2월 14 ~ 2월 16일</td>
            </tr>
            <tr>
              <td>
                두 번째 프로필
                <br />
                (2부 &gt; 3부)
              </td>
              <td>선택</td>
              <td>3월 7일 ~ 3월 9일</td>
            </tr>
            <tr>
              <td>
                세 번째 프로필
                <br />
                (3부 &gt; 4부)
              </td>
              <td>필수</td>
              <td>3월 28일 ~ 3월 30일</td>
            </tr>
            </tbody>
          </table>
        </p>
        <p>
          ▶ 모든 리뉴얼 프로필에 이미지는 요구되지 않습니다. 리뉴얼을 위한
          정보는 리뉴얼 프로필 접수 전 일괄적으로 공개됩니다. 현재까지 공개된
          문서는 다음을 참고해주세요. 2부 리뉴얼 안내 및 리뉴얼 프로필 3부
          리뉴얼 안내 및 리뉴얼 프로필 폼 2~3부 리뉴얼 기간 중 일어난 사건 일람
          4부 리뉴얼 안내 및 리뉴얼 프로필 폼 (미공개)
        </p>
        <p>
          ▶ 리뉴얼 기간 중 텍스트 관계는 프로필을 제출한 후 총괄 계정의 DM 혹은
          이메일로 조율 여부에 대한 ‘회신 확인’을 받은 뒤 임시 프로필과 함께
          진행하실 수 있습니다. 조율 여부가 있다면 조율을 완료하시고 총괄
          계정으로부터 컨펌 회신을 받은 이후에 텍스트 관계 형성을 진행하실 수
          있습니다.
        </p>
        <p>
          ▶ 선택 프로필을 제출하는 리뉴얼 기간 중 텍스트 관계 형성은 다음과 같은
          경우에 가능합니다. 모든 참가자가 리뉴얼 프로필을 제출했고, 총괄
          계정으로부터 확인 회신을 받은 경우. 참가자 중 일부는 리뉴얼 프로필을
          제출하여 총괄 계정으로부터 확인 회신을 받았으며, 나머지 참가자는
          리뉴얼 프로필 제출 계획이 없는 경우. 모든 참가자가 리뉴얼 프로필 제출
          계획이 없는 경우.
        </p>
        <p>
          ▶ 텍스트 관계 및 리뉴얼 프로필은 총괄 계정으로 정상 접수된 내용만을
          인정합니다.
        </p>
        <br />
        <p id="0c80d86f-a3e8-4c4e-8b5f-d5518cb575dd" className="">
          러닝 중 캐릭터와 상대 오너에 대한 예의를 지켜주시길 바랍니다.
          <br />
          또한 주제나 상황, 시간대 등에 대해 모든 대화에서 다른 오너를 배제하는
          일을 지양해주세요.
          <br />
          이상의 사항 준수가 어려우신 분들께서는 신청을 재고해주시길 바랍니다.
        </p>
      </TextBox>
      <br />
      <TextBox>
        <p>Licence</p>
        <p>
          Song: Last Heroes x TwoWorldsApart - Eclipse (feat. AERYN) [NCS
          Release] <br />
          Music provided by NoCopyrightSounds
          <br />
          Free Download/Stream: http://ncs.io/Eclipse
          <br />
          Watch: http://youtu.be/QSJljnPhiHI
        </p>
        <p>
          본 커뮤니에 게재된 사진 이미지는 출처 표기 등을 포함하여 라이센스
          사항을 준수하고 있으며 그 외의 이미지는 모두 커뮤니티의 운영진과
          러너들에게 귀속되어 있음을 알립니다.
        </p>
      </TextBox>
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
};
