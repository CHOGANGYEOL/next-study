## Repository to study next.js

### 기획
- `Next.js`와 `TypeScript`를 목적으로 공부할 수 있으며 다른사람들도 사용할 수 있는 활용성 있는 어플리케이션을 만드는 것을 목표로 만든다.
- 문제점보이는 것, 프론트엔드 솔로 프로젝트이기 때문에 REST API를 자유롭게 활용하여 만들 수 없는 문제가 보임.
  - 해결방법
  - [공공데이터포털](https://data.go.kr)에서 무료로 제공해주는 DB를 활용하여 프로젝트를 기획한다.
- 포털에서 제공해주며 사용할만한 `data`가 무엇이 있을까?
  - `REST`를 지원하며 `JSON` 형태로 된 `data`를 정렬하여 찾아본다.
  1. 주차장 정보 조회 서비스 [링크](https://www.data.go.kr/data/15113190/openapi.do)
     - 주차장 운영정보와 실시간 주차 잔여수, 지도를 활용하여 실시간으로 주위에 주차를 할 수 있는 공간을 찾는 어플리케이션을 만든다. 
     - <s>api 지원 종료에 따른 기각</s>
  2. 택시 운행 통계 서비스 [링크](https://www.data.go.kr/data/15113195/openapi.do)
     -  해당지역에 어디서 택시를 자주 탑승하는지 확인하여, 어디서 택시를 잡으면 수월할 지 정보를 제공해준다
     - <s>콜 택시가 많아짐과함께 사용성여부를 생각해보면 좋지 않을 것 같아 기각</s>
  3. 의료수거함 위치 조회 서비스 [링크](https://www.data.go.kr/data/15068863/fileData.do)
     - 집근처에 의료 수거함 위치를 찾을 수 있도록 지원한다.
     - 지역별로 상당 수 api가 확도되어 여러 지역을 지원할 수 있을것으로 예상됨
     - 1차 개발로는 지원해주는 api를 사용하여 활용가능한 지역들만 제작 후 추후 백엔드 개발자의 협력을 통한 사용자가 직접 위치정보를 제공하여 나아가는식으로 하면 괜찮을 것 같음
     - 활용가능한 api 리스트
       - [서울 서대문구](https://www.data.go.kr/data/15068863/fileData.do)
       - [서울 동작구](https://www.data.go.kr/data/15068021/fileData.do)
       - [서울 관악구](https://www.data.go.kr/data/15076398/fileData.do)
       - [서울 구로구](https://www.data.go.kr/data/15068871/fileData.do)
       - [서울 영등포구](https://www.data.go.kr/data/15106473/fileData.do)
       - [서울 마포구](https://www.data.go.kr/data/15110590/fileData.do)
       - [서울 양천구](https://www.data.go.kr/data/15105196/fileData.do)
       - [서울 광진구](https://www.data.go.kr/data/15109594/fileData.do)
       - [서울 종로구](https://www.data.go.kr/data/15104622/fileData.do)
       - [서울 금천구](https://www.data.go.kr/data/15106679/fileData.do)
       - [서울 동대문구](https://www.data.go.kr/data/15112228/fileData.do)
       - [서울 은평구](https://www.data.go.kr/data/15118490/fileData.do)
       - [인천 미추홀구](https://www.data.go.kr/data/15086045/fileData.do)
       - [인천 남동구](https://www.data.go.kr/data/15104008/fileData.do)
       - [광주 남구](https://www.data.go.kr/data/15122304/fileData.do)
       - [광주 광역시](https://www.data.go.kr/data/15056449/fileData.do)
       - [강원도 춘천](https://www.data.go.kr/data/15108522/fileData.do)
       - [전북 정읍](https://www.data.go.kr/data/15098214/fileData.do)
     - 지도 api는 무엇을 사용할 것 인지?
        - 속도면이나 제일 괜찮은것은 카카오톡으로 보여 카카오톡으로 확정

| |구글 지도 |카카오 지도 | 네이버 지도 | 
| --- | --- | --- | --- |
| 내용 | - 주소<br> - 우편번호<br>- 경위도<br>- 건물/지형형태<br>- 대각좌표<br>- 장소ID<br>- 국제코드명(81개 언어) | - 지번주소/도로명주소<br>- 우편번호<br>- 경위도<br>- 영문주소 | - 지번주소/도로명주소<br>- 우편번호<br>- 경위도<br>- 지형/지하정보 |
| 최신화 주기 | - 응답없음 | - 월 1회 정기 업데이트<br>- 이벤트 발생 시 수시 업데이트<br>- 대략 격주로 업데이트 | - 영업 비밀 |
| 속도 | - 첫로딩 / 47 / 32 / **38.6**<br>- 검색시간 / 1203 / 407 / 634.2  | - 첫로딩 / 217 / 103 / 146<br>- 검색시간 / 153 / 85 / 112.2 | - 첫로딩 / 142 / 113 / 124.4<br>- 검색시간 / 78 / 62 / **71.6** |
| 요금 | - 월 200달러 무료 제공<br> - 정적 지도(2달러 / 1,000건) | - 정적 지도 (무료) | - 1일 3000,000건 무료 |



### 디자인

### 개발