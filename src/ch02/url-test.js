// url 모듈 로드
var urlType = require('url');

// 상대 경로를 절대 경로로 변경
var base = "http://soulduse.tistory.com";
var u1 = urlType.resolve(base, 'a.htlm');
console.log("u1 = "+u1);

var u2 = urlType.resolve(base, '../b.htlm');
console.log("u2 = "+u2);

var u3 = urlType.resolve(base, 'c.htlm');
console.log("u3 = "+u3);
