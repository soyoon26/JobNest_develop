import ContractRadio from "../../Common/ContractRadio";

const HowToWrite = () => {
  return (
    <div className="w-[1197px]  mt-8 pb-32">
      <div className="border-bt flex pt-2">
        작성방법(주거용 건축물) 출력
        <div className="ml-12">
          <ContractRadio
            name="print"
            options={[{ label: "미출력" }, { label: "출력" }]}
          />
        </div>
      </div>
      <div className="bg-[#D9D9D9] mt-2 w-full items-j border-bt h-[37px] text-[20px]">
        작성방법(주거용 건축물)
      </div>
      <div className="p-4">
        <div className="whitespace-pre-wrap text-[20px]">
          <span className="font-bold">&lt;작성일반&gt;</span>
          <br />
          1. “[ ]”있는 항목은 해당하는 “[ ]”안에 √로 표시합니다.
          <br />
          <br />
          2. 세부항목 작성 시 해당 내용을 작성란에 모두 작성할 수 없는 경우에는
          별지로 작성하여 첨부하고, 해당란에는 “별지 참고”라고 적습니다.
          <br />
          <br />
          <span className="font-bold">&lt;세부항목&gt;</span>
          <br />
          1. 「확인·설명자료」 항목의 "확인·설명 근거자료 등"에는
          개업공인중개사가 확인·설명 과정에서 제시한 자료를 적으며, "대상 물건의
          상태에 관한 자료요구 사항"에는 매도(임대)의뢰인에게 요구한 사항 및 그
          관련 자료의 제출 여부와 ⑩ 실제 권리관계 또는 공시되지 않은 물건의
          권리사항부터 ⑬ 환경조건까지의 항목을 확인하기 위한 자료의 요구 및 그
          불응 여부를 적습니다.
          <br />
          <br />
          2. ① 대상물건의 표시부터 ⑨ 취득 시 부담할 조세의 종류 및 세율까지는
          개업공인중개사가 확인한 사항을 적어야 합니다.
          <br />
          <br />
          3. ① 대상물건의 표시는 토지대장 및 건축물대장 등을 확인하여 적고,
          건축물의 방향은 주택의 경우 거실이나 안방 등 주실(主室)의 방향을, 그
          밖의 건축물은 주된 출입구의 방향을 기준으로 남향, 북향 등 방향을 적고
          방향의 기준이 불분명한 경우 기준 (예: 남동향 – 거실 앞 발코니 기준)을
          표시하여 적습니다.
          <br />
          <br />
          4. ② 권리관계의 "등기부 기재사항"은 등기사항증명서를 확인하여
          적습니다.
          <br />
          <br />
          5. ③ 임대차 확인사항은 「주택임대차보호법」 제3조의7에 따라 임대인이
          확정일자 부여일, 차임 및 보증금 등 정보(확정일자 부여 현황 정보)·국세
          및 지방세 납세증명서(국세 및 지방세 체납 정보)의 제출 또는 열람 동의로
          갈음했는지 구분하여 표시하고, 「공인중개사법」 제25조의3에 따른
          임차인의 권리에 관한 설명 여부를 표시합니다. 그리고 임대인이 전입세대
          확인 서류를 제출했는지 표시합니다 (매매, 임대인 거주, 공실 등 확인서류
          열람발급이 불가능한 경우에는 ‘해당없음’으로 합니다). 또한
          최우선변제금은 「주택임대차보호법 시행령」제11조(보증금 중 일정액의
          범위 등), 제10조(우선 변제를 받을 임차인의 범위)를 확인하여 각각 적되,
          근저당권 등 선순위 담보물권이 설정되어 있는 경우 선순위 담보물권 설정
          당시의 소액임차인 범위 및 최우선변제금액을 기준으로 적어야 합니다.
          <br />
          <br />
          6. ③ 임대차 확인사항의 “민간임대 등록여부"는 대상물건이
          「민간임대주택에 관한 특별법」에 따라 등록된 민간임대주택인지 여부를
          같은 법 제60조에 따른 임대주택정보체계에 접속하여 확인하거나
          임대인에게 확인하여 "[ ]"안에 √로 표시하고, 민간임대주택인 경우
          「민간임대주택에 관한 특별법」에 따른 권리·의무사항을 임대인 및
          임차인에게 설명해야 합니다.
          <br />* 민간임대주택은 「민간임대주택에 관한 특별법」 제5조에 따른
          임대사업자가 등록한 주택으로서, 임대인과 임차인 간 임대차 계약 (재계약
          포함) 시 다음과 같은 사항이 적용됩니다. ① 같은 법 제44조에 따라
          임대의무기간 중 임대료 증액청구는 5퍼센트의 범위에서 주거비 물가지수,
          인근 지역의 임대료 변동률 등을 고려하여 같은 법 시행령으로 정하는
          증액비율을 초과하여 청구할 수 없으며, 임대차계약 또는 임대료 증액이
          있은 후 1년 이내에는 그 임대료를 증액할 수 없습니다. ② 같은 법
          제45조에 따라 임대사업자는 임차인이 의무를 위반하거나 임대차를
          계속하기 어려운 경우 등에 해당하지 않으면 임대의무기간 동안 임차인과의
          계약을 해제·해지하거나 재계약을 거절할 수 없습니다.
          <br />
          <br />
          7. ③ 임대차 확인사항의 "계약갱신요구권 행사여부"는 대상물건이
          「주택임대차보호법」의 적용을 받는 주택으로서 임차인이 있는 경우
          매도인(임대인)으로부터 계약갱신요구권 행사 여부에 관한 사항을 확인할
          수 있는 서류를 받으면 "확인"에 √로 표시하여 해당 서류를 첨부하고,
          서류를 받지 못한 경우 "미확인"에 √로 표시하며, 임차인이 없는 경우에는
          "해당 없음"에 √로 표시합니다. 이 경우 개업공인중개사는
          「주택임대차보호법」에 따른 임대인과 임차인의 권리ㆍ의무사항을
          매수인에게 설명해야 합니다.
          <br />
          <br />
          8. ④ 토지이용계획, 공법상 이용제한 및 거래규제에 관한 사항(토지)의
          "건폐율 상한 및 용적률 상한"은 시·군의 조례에 따라 적고,
          "도시·군계획시설", "지구단위계획구역, 그 밖의 도시·군관리계획"은
          개업공인중개사가 확인하여 적으며, "그 밖의 이용제한 및 거래규제사항"은
          토지이용계획확인서의 내용을 확인하고, 공부에서 확인할 수 없는 사항은
          부동산종합공부시스템 등에서 확인하여 적습니다 (임대차의 경우에는
          생략할 수 있습니다).
          <br />
          <br />
          9. ⑥ 관리비는 총 금액을 적되, 관리비에 포함되는 비목들에 대해서는
          [√]로 표시하여야 하며 기타 비목에 대해서는 [√] 표시 후 비목 내역을
          적습니다. 또한, 관리비 부과방식에 맞게 [√]로 표시하여야 하며 기타
          부과방식을 선택한 경우 그 부과방식에 대해서 작성하여야 합니다.
          <br />
          <br />
          10. ⑦ 비선호시설(1㎞ 이내)의 "종류 및 위치"는 대상물건으로부터 1㎞
          이내에 사회통념상 기피 시설인
          화장장ㆍ납골당ㆍ공동묘지ㆍ쓰레기처리장ㆍ쓰레기소각장ㆍ분뇨처리장ㆍ하수종말처리장
          등의 시설이 있는 경우, 그 시설의 종류 및 위치를 적습니다.
          <br />
          <br />
          11. ⑧ 거래예정금액 등의 "거래예정금액"은 중개가 완성되기 전
          거래예정금액을, "개별공시지가(㎡당)" 및 "건물(주택)공시가격"은 중개가
          완성되기 전 공시된 공시지가 또는 공시가격을 적습니다 [임대차의
          경우에는 "개별공시지가(㎡당)" 및 "건물(주택) 공시가격"을 생략할 수
          있습니다].
          <br />
          <br />
          12. ⑨ 취득 시 부담할 조세의 종류 및 세율은 중개가 완성되기 전
          「지방세법」의 내용을 확인하여 적습니다 (임대차의 경우에는
          제외합니다).
          <br />
          <br />
          13. ⑩ 실제 권리관계 또는 공시되지 않은 물건의 권리 사항은
          매도(임대)의뢰인이 고지한 사항(법정지상권, 유치권,
          「주택임대차보호법」에 따른 임대차, 토지에 부착된 조각물 및 정원수,
          계약 전 소유 권 변동 여부, 도로의 점용허가 여부 및 권리ㆍ의무승계 대상
          여부 등)을 적습니다. 「건축법 시행령」 별표 1 제2호에 따른
          공동주택(기숙사는 제외합니다) 중 분양을 목적으로 건축되었으나 분양되지
          않 아 보존등기만 마쳐진 상태인 공동주택에 대해 임대차계약을 알선하는
          경우에는 이를 임차인에게 설명해야 합니다. ※ 임대차계약의 경우 현재
          존속중인 임대차의 임대보증금, 월 단위의 차임액, 계약기간,
          장기수선충당금의 처리 등을 확인하여 적습니다. 그 밖에 경매 및 공매
          등의 특이사항이 있는 경우 이를 확인하여 적습니다.
          <br />
          <br />
          14. ⑪ 내부·외부 시설물의 상태(건축물), ⑫ 벽면ㆍ바닥면 및 도배 상태와 ⑬
          환경조건은 중개대상물에 대해 개업공인중개사가 매도(임대)의뢰인에게
          자료를 요구하여 확인한 사항을 적고, ⑪ 내부·외부 시설물의
          상태(건축물)의 "그 밖의 시설물"은 가정자동화 시설(Home Automation 등
          IT 관련 시설)의 설치 여부를 적습니다.
          <br />
          <br />
          15. ⑮ 중개보수 및 실비는 개업공인중개사와 중개의뢰인이 협의하여 결정한
          금액을 적되 "중개보수"는 거래예정금액을 기준으로 계산하고,
          "산출내역(중개보수)"은 "거래예정금액(임대차의 경우에는 임대보증금 + 월
          단위의 차임액 × 100) × 중개보수 요율"과 같이 적습니다. 다만,
          임대차로서 거래예정금액이 5천만원 미만인 경우에는 "임대보증금 + 월
          단위의 차임액 × 70"을 거래예정금액으로 합니다.
          <br />
          <br />
          16. 공동중개 시 참여한 개업공인중개사(소속공인중개사를 포함합니다)는
          모두 서명·날인해야 하며, 2명을 넘는 경우에는 별지로 작성하여
          첨부합니다
        </div>
      </div>
    </div>
  );
};
export default HowToWrite;
