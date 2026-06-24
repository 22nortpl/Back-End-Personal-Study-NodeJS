모듈 : 프로그램을 작은 기능 단위로 쪼개고 파일 형태로 저장한 것

모듈 시스템 : CommonJS 모듈 시스템 vs ES 모듈 시스템

CommonJS 모듈 시스템 : Node.js 기본 모듈 시스템. (require, module.exports 사용)
ES 모듈 시스템 : 에크마스크립트의 표준 모듈 시스템 (import, export 사용)
아직은 CommonJS가 기본, 그러나 ES도 지원

자바스크립트 객체 형식
객체명 = {
  키:값,
  키:값,
  ...
}

ex:gitBook
let gitBook = {
  title : "깃&깃허브 입문",
  pubDate : "2019-12-06",
  pages : 272,
  finished : true
}

