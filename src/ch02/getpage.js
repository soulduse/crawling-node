// 모듈 로드
var client = require('cheerio-httpcli');

// Download
var url = "http://www.khoa.go.kr/swtc/main.do";
var param = {};

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
