ES 모듈 시스템 사용법 2가지

1. package.json 에서 "type": "commonJS"를
"type": "module"로 변경

2. 파일 확장자를 .mjs로 변경

모듈 내보내기 : export, export default 사용
방법 1. 하나씩 내보내기 - export 붙이기

모듈에 있는 함수나 변수, 객체 가운데 외부에서 사용할 수 있게 할 대상 앞에 export를 붙임

방법 2. 기본으로 내보내기 - export default 이용

모듈에서 내보낼 대상이 하나뿐이라면 앞에 export를 붙여도 되지만, 모듈 코드 마지막에서 export default를 사용 가능

모듈 가져오기 : import ~ from 사용
기본형 : import 변수명/함수명 from 모듈_파일

실행할 때도 .mjs 무조건 붙일 것!!

import~ as는 변수명을 바꾸고 싶을 때 사용, 이 방법은 여러개를 바꾸고 싶을 때도 적용 가능
예시
import {goodbye as bye} from "./goodbye-1.mjs";

bye("이민상");

가져와야 할 게 너무 많으면, *로 통합 가능
이후 객체 프로퍼티를 가져오는 방식을 이용 (객체.프로퍼티)

만약 변수가 여러개일 때 default를 사용한다면 *를 사용할 필요가 없음.