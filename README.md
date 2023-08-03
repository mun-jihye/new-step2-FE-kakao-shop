## 과제 1

`쇼핑몰 웹사이트를 탐색해 어떠한 페이지 구성을 가지고 있는지 체크`

### 웹사이트 전체 페이지 구성 

- 로그인 페이지
- 메인 페이지
- 상품 검색 결과 페이지
- 개별 상품 상세 페이지
- 리뷰 페이지 
- 문의 페이지 
- 장바구니 페이지
- 결제 페이지
- 결제 완료 페이지
- 마이페이지
- ...

### 페이지별 구성

1. 로그인 페이지
- 핵심 기능: 로그인 요청 및 사용자 로그인 정보 저장
- 기능 상세 설명: 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리를 합니다.
- 인터페이스 요구사항: 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다. 

2. 메인 페이지
- 핵심 기능: 처음 보이는 페이지로 전면 배너, 상품 사진과 상품 명/가격, 로고 등을 보여준다.
- 기능 상세 설명: 상품, 배너, 로그인 버튼 등 클릭 시 적절히 해당 페이지로 이동시켜준다.
- 인터페이스 요구사항: 찜하기, 공유하기 등 로그인이 필요한 경우 로그인 페이지로 넘어가야 하고
상품 명이 길 경우 핵심적인 내용만 보여준다.

3. 상품 검색 결과 페이지
- 핵심 기능: 상품명 검색 및 해당 상품 페이지 요청, 결과를 보여줌 
- 기능 상세 설명
	1) 검색 아이콘을 눌렀을 때 검색 바가 열리고 최근 검색해본 결과가 보인다. 
	2) 사용자가 검색 바에 검색어를 입력했을 때 연관 상품이 뜬다.
	3) 사용자가 상품을 검색하면 그 단어가 포함된 모든 상품의 조회 결과가 보여진다.
	4) 검색 결과에 대한 정렬은 사용자가 선택할 수 있고, 디폴트는 랭킹순으로 한다.
	5) 카테고리를 두어 무료배송상품, 가격대를 선정하여 사용자가 검색 결과를 필터링할 수 있다.
- 인터페이스 요구사항
	1) 사용자가 검색 결과 중 어떤 상품을 클릭하면 해당 제품의 상세 페이지를 볼 수 있다.
	2) 찜하기를 눌렀을 때 비회원일 경우 로그인 화면이 뜬다.

4. 개별 상품 페이지
- 핵심 기능: 해당 상품의 이미지와 가격, 제품이름, 상세정보를 보여줌
- 기능 상세 설명
	1) 해당하는 상품에 대한 이미지, 제품이름, 상세정보, 리뷰 수, 문의 수를 보여준다.
	2) 스크롤을 내리면 기본적으로 상세 정보가 보여지고, 사용자는 리뷰나 문의를 클릭할 수 있다.
	3) 페이지의 하단에서는 해당 제품과 연관된 상품을 보여준다.
- 인터페이스 요구사항
	1) 구매하기를 누르면 결제 페이지로 이동한다.
	2) 리뷰 수를 누르면 다른 사용자가 남긴 리뷰를 볼 수 있는 페이지로 이동한다.
	3) 문의 수를 누르면 다른 사용자가 남긴 문의를 볼 수 있는 페이지로 이동한다.

5. 리뷰 페이지
- 핵심 기능 : 다른 구매자의 별점과 사진, 글을 볼 수 있다.
- 기능 상세 설명
	1) 다른 구매자가 올린 별점, 사진, 글을 볼 수 있다.
	2) 다른 구매자의 상품 옵션을 볼 수 있다.
	3) 리뷰 정렬의 기본 값은 추천순 이고, 최신순, 별점 높은 순, 별점 낮은 순을 사용자가 선택할 수 있다.
	4) 추천순은 사진 첨부, 리뷰 글자수, 최신 작성일, 별점, 도움돼요 수 등을 기준으로 점수화하여 정렬한다.
	5) 카테고리를 둬서 기본값은 전체 리뷰고, 사용자가 자신의 옵션에 맞게 필터링해서 볼 수 있다.
- 인터페이스 요구사항: '도움돼요'를 누를 경우 도움돼요 숫자가 올라간다.

6. 문의 페이지
- 핵심 기능 : 문의를 작성할 수 있고, 다른 구매자가 작성한 문의를 볼 수 있다.
- 기능 상세 설명
	1) 문의를 작성할 수 있고 문의 작성시, 비밀글로 작성하여 다른 사용자가 보지 못하게 막을 수 있다.
	2) 내 문의글만 필터링 해서 볼 수 있다.
	3) 카테고리를 둬서 문의를 필터링 해서 볼 수 있다. (상품문의, 배송문의, 교환 및 환불, 반품, 기타)
- 인터페이스 요구사항 : 글쓰기를 누르면 문의글을 작성할 수 있는 페이지가 보인다.

7. 장바구니 페이지
- 핵심 기능: 사용자가 구매 직전에 담아놓은 상품이 최신순으로 보인다.
- 기능 상세 설명: 사용자가 구매 전에 담아놓은 상품을 보고 전체를 모두 구매할 지, 일부만 구매할 지 선택할 수 있다.
- 인터페이스 요구사항
	1) 장바구니에 담긴 상품이 없을 경우, 이전화면으로 돌아가거나 메인 페이지로 이동할 수 있는 버튼이 뜬다. 
	2) 장바구니에서 상품을 선택하여 결제하기를 누르면 결제 페이지로 이동할 수 있다.

8. 결제하기 페이지
- 핵심 기능: 사용자가 결제하기 페이지에 있는 상품을 결재할 수 있다.
- 기능 상세 설명: 사용자의 배송지와 배송 요구사항을 입력받은 후 결제할 수 있는 창이 뜬다.
- 인터페이스 요구사항: 결제가 완료되면 결제완료 페이지가, 결제가 실패되면 장바구니 페이지로 돌아간다.

9. 결제 완료 페이지
- 핵심 기능: 사용자에게 결제가 완료됐음을 보여주는 기능
- 기능 상세 설명: 사용자가 구메한 목록을 보여주고 해당 상품이 구매가 완료되었음을 사용자에게 알려준다.
- 인터페이스 요구사항: 사용자가 구매한 목록을 클릭하면 제품의 배송 정보를 볼 수 있다.

10. 마이페이지
- 핵심 기능: 사용자의 주문내역, 포인트 찜한 상품을 볼 수 있다.
- 기능 상세 설명
	1) 진행중인 주문 내역에 들어가면 결제완료, 배송요청, 배송준비중, 배송중, 배송완료 순으로 구매한 제품의 현황을 보여준다.
	2) 사용자의 포인트와 쿠폰 내역을 보여준다.
	3) 사용자가 제품을 보면서 찜해놓은 상품의 목록, 최근 본 상품을 확인할 수 있다.
- 인터페이스 요구사항: 찜한 상품과 장바구니는 다르며, 찜한 상품에서 장바구니로 제품을 옮길 수 있고 바로 구매 또한 가능하다.

### 디렉터리 구조
```
    -/public : 정적 파일이 포함되는 곳으로, 컴파일이 필요 없는 파일들
        - index.html
    -/src
        -/components : 커스텀 컴포넌트
            -Footer.jsx
            -Sidebar.jsx
            - ...
        -/assets : 이미지, 폰트와 같은 파일이 저장 
        -/hooks : 커스텀 훅
        -/pages : react router 등을 이용해 라우팅 적용할 때 페이지 컴포넌트를 위치
            -Main.js
            -Shop.js
            -Login,Logout.js
            -Review.js
            -Pay.js
            -Search.js
            - ...
        -/styles : css 파일들이 포함되는 폴더
        -/services : api관련 로직의 모듈 파일이 위치 
        -/utils : 정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들 위치 
```
