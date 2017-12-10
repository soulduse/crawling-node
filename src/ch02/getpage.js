// 모듈 로드
var client = require('cheerio-httpcli');

// Download
var url = "http://www.khoa.go.kr/swtc/main.do";
var param = {};

/**
  @err - 오류정보
  @$ - 취득한 데이터
  @res - 서버의 응답 정보
*/
client.fetch(url, param, function(err, $, res){
  // check error
  if(err){
    console.log("Error:", err);
    return;
  }

  // print result downloaded data
  var body = $.html();
  console.log(body);
});
