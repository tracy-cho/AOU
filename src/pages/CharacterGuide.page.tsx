import React, {useEffect} from "react";

import "./CharacterGuidePage.scss";
import { Logo } from "../components/atom/Logo";

export type CharacterGuidePageProps = {
  cx?: string;
};

export const CharacterGuidePage: React.FC<CharacterGuidePageProps> = ({
  cx = "",
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className={`CharacterGuidePage ${cx}`}>
      <section className="Logo">
        <Logo />
      </section>
      <div className="title">
        <h3>캐릭터 메이킹 가이드</h3>

        <div className="list">
          <ol>
            <li>밝혀진 우주와 현재</li>
            <li>설계자의 자각: ‘최초의 경험’</li>
            <li>
              범인류연합
              <ol>
                <li>사회적 분위기와 생활상</li>
                <li>과학기술 수준</li>
              </ol>
            </li>
          </ol>
        </div>
        <article
          id="791b6a0b-d6ea-47d0-8811-f81199d6d0cc"
          className="page sans"
        >
          <div className="page-body">
            <h4>1. 밝혀진 우주와 현재</h4>
            <p id="c9c08283-0147-4f97-b183-aaab7e704829" className="">
              인류의 주 활동영역. ‘대붕괴’ 이후 태양계로부터 이주해온 인류는
              멀리 떨어진 새로운 은하의 가장자리에 터를 잡았습니다. 별다른 호칭
              없이 ‘우리 은하’와는 구분을 두어 ‘밝혀진 우주’라 칭합니다. 또한
              인류가 태양계에서 지금의 ‘밝혀진 우주’로 이주할 당시 건조된
              ‘터미누스 방어선’이 라토스의 침공을 1차적으로 방어하고 있기 때문에
              다른 구역에 비해 상대적으로 라토스의 침공에서부터 안전한
              우주이기도 합니다.
            </p>
            <p id="61d55bc9-e245-4d16-bf95-2695403e39fd" className="">
              그러나 ‘터미누스 방어선’이 건재함에도 불구하고 최근 라토스는 이상
              현상을 보이고 있습니다. 관측되어서는 안 될 지역에서 관측되거나 그
              빈도가 잦아지는 추세로 연합의 일부 지역에서는 ‘주의 경보’를
              발령하기도 했습니다. 10년 전 라플라스 콜로니 소실부터 최근 여객선
              선라이즈 호의 낙하 사고까지, 갑작스러운 라토스 발생으로 인한 크고
              작은 인명피해가 이어지는 가운데 새로운 세대의 설계자들이 등장하지
              않아 불안한 정세가 이어지고 있었습니다.
            </p>
            <p id="4c4f956c-17fb-4f29-a4b2-7c90545dd321" className="">
              그런 분위기에서 20년만에 새 설계자들이 등장했습니다. 커뮤니티에
              참여하게 되는 캐릭터들이 바로 이번 세대의 설계자입니다.
            </p>
            <ul
              id="c0658d5d-eca1-4309-a18f-c395cd963105"
              className="bulleted-list"
            >
              <li>캐릭터의 나이는 모두 13세에서 30세 사이입니다.</li>

              <li>
                출신 및 과거사 설정은 ‘밝혀진 우주’를 배경으로 하는 한
                자유롭습니다. 다만 출신 성역의 경우 제시된 구역 외의 ‘거주 가능
                성역’은 존재하지 않으므로, 각 성역을 기반으로 고향 행성이나
                콜로니에 대한 설정을 만들어주세요.
              </li>

              <li>
                모든 설계자는 자각하고 반 년 내로 등록됩니다. 어떠한 경우에도
                예외는 존재하지 않습니다.
              </li>

              <li>
                또한 모든 설계자는 ‘최초의 경험’을 통해 자각하게 됩니다. (하단
                해당 항목 참고)
              </li>

              <li>
                능력 겹침은 소수 합격 요소가 아닙니다. 운용법이 완전히 동일한
                경우엔 시간적으로 먼저 접수된 신청서를 우선하며 이후의
                신청자에게 설정 조정 요청을 드릴 예정입니다.
              </li>
            </ul>
            <h4>2. 설계자의 자각: ‘최초의 경험’</h4>
            <p id="1fa53b78-19d6-4dc8-8fd9-31f747e92c20" className="">
              설계자의 발생은 어떤 요소와도 밝혀진 상관관계가 없으나 단 하나
              서로가 공유하는 유일한 공통점이 있습니다. 바로 스스로가 설계자임을
              자각하게 되는 순간에 겪게 되는 경험인데, 설계자들은 이를 ‘최초의
              경험’으로 칭합니다.
            </p>
            <p id="ff03dbd5-adb7-4bc9-a526-217f945d2057" className="">
              ‘최초의 경험’에 대해 대중에게 밝혀진 것은 거의 없습니다. 다만
              자신의 심상세계에서 자기 ‘미메시스의 근원’을 마주하고 이에 대한
              이해를 깨우치며 설계자로서의 자각을 마친다는 점만이 알려져
              있습니다. 언제 경험하게 되는지, 구체적으로 무엇을 보는지 역시
              알려져 있지 않습니다만, 설계자들은 여기서 우주를 바라보는 자신의
              관점을 확립하고 지각을 확장하게 됩니다.
            </p>
            <p id="a4ecadff-b1de-45ed-b4dd-d10b7086b9e3" className="">
              (예: 불을 다루는 설계자는 자각의 순간 불타는 들판을 볼 수
              있습니다. 들판의 가운데에는 태양을 양 뿔 사이에 진 사슴이 있다거나
              하는 이미지입니다. 들판이 어디인지, 혹은 항성을 진 짐승이 무엇인지
              ‘알지’ 못해도 ‘겪을 수’ 있습니다. 자각의 순간이 지난 이후 설계자는
              우주의 법칙을 ‘불’로 이해하며 미메시스를 다루는 설계자로 다시
              태어납니다.)
            </p>
            <h4>3.범인류연합</h4>
            <p id="4a3097dc-ab8a-41d3-9e02-13498fb2a236" className="">
              인류의 정부 기관. 전신은 인류 연합으로 라토스 침공으로 인한 대붕괴
              이후 살아남은 이들이 모여 세운 인류 최후의 질서. 터미누스 성계를
              수도로 하였으며 행정구역은 인류가 거주 가능한 ‘성역’을 기준으로
              구역을 나누고, 수도성의 항성 이름을 따 해당 성역을 지칭합니다.
              (예: 아스타테 성역의 수도성은 훌루프, 훌루프의 항성은 아스타테)
            </p>
            <p id="d680f253-e289-410f-ba5e-2cc77e49c916" className="">
              연합 중앙정부와 각 성역의 지방정부로 구성된 연방국가의 형식을
              가지나 연합이라 부릅니다.
            </p>
            <h5>i. 사회적 분위기</h5>
            <div className="sub-wrapper">
              <p id="b6468a09-700d-4003-9b26-55a3a01e9c16" className="">
                대략적인 연합의 사회적 분위기는 다음과 같습니다.
              </p>
              <ul
                id="3694ad42-95dc-4a9f-aab1-9a6bb5bfb5fe"
                className="bulleted-list"
              >
                <li>
                  물자와 에너지의 만성 부족상태, 성역별 자급이 불가능한 식량
                  생산 구조입니다.
                </li>

                <li>
                  일부 행성과 콜로니에서는 배급제를 시행하며 에너지 절약을 위해
                  통행금지 시간이 설정되기도 합니다.
                </li>

                <li>
                  미성년 시민의 양육은 각 지방정부의 공동양육이 주로 이루어지나
                  전통적인 의미의 가족 형태 역시 사라진 것은 아닙니다. 그러나
                  어떠한 사유로든 보호자가 없는 미성년 시민이 확보될 경우 해당
                  지방정부에서 공동으로 미성년 시민의 양육을 책임집니다.
                </li>
                <li>
                  대부분의 시민이 ‘라토스’에 의한 재난 상황에 익숙합니다. 많은
                  위기가 있었으나 연합 시민들은 단결력으로 이를 극복해냈습니다.
                  다만 최근 ‘밝혀진 우주’ 내에서의 세력관계가 연합 중앙정부를
                  중심으로 하는 ‘친정부’파와 연합군을 필두로 하는 ‘친군부’파로
                  재편되는 움직임을 보이고 있습니다.
                </li>
              </ul>
            </div>
            <h5>ii. 연합의 과학기술수준</h5>
            <div className="sub-wrapper">
              <p id="baaa951e-f8fe-4766-9485-83e15ae34052" className="">
                대략적인 연합의 과학기술수준은 다음과 같습니다.
              </p>
              <ul
                id="91fb94c6-2c56-46d9-811d-2bf2dc5d111e"
                className="bulleted-list"
              >
                <li>
                  대부분의 장기를 기계로 대체할 수 있습니다. 가격이 다소 문제가
                  되나 연합의 모든 시민에게 의체를 필요로 하는 치료 행위는
                  건강보험의 적용 대상입니다. (혹은 급여 대상입니다.)
                </li>

                <li>클론의 경우 윤리적 문제로 연구되지 않습니다.</li>

                <li>
                  ‘밝혀진 우주’ 사이의 이동은 워프 버블을 사용한 항해가
                  가능합니다. 다만 워프 버블을 통한 여행은 라토스에게 공격받을
                  가능성을 최소화하기 위해 밝혀진 우주 내부에서만 이루어집니다.
                </li>
              </ul>
            </div>
          </div>
          <p className={"i"}>
            그 외 문의사항은 총괄 계정
            <a href="https://twitter.com/archofuniverse">@archofuniverse</a> 의
            DM으로만 접수받으며, 문의 중 개인 설정이 아닌 보편 설정에 대한 문의
            답변은 문의자의 동의를 받은 후 공개될 수 있습니다.
          </p>
        </article>
      </div>
    </main>
  );
};
