// 모듈 로드
var client = require('cheerio-httpcli');
var urlType = require('url');

// download
var url = "http://jpub.tistory.com";
var param = {};
client.fetch(url, param, function(err, $, res){
  if(err){
    console.log("error"); return;
  }

  $('a').each(function(idx){
    var text = $(this).text();
    var href = $(this).attr('href');
    if(!href) return;

    // 상대 경로를 절도 경로로 변환
    var href2 = urlType.resolve(url, href);

    // 결과 표시
    console.log(text+":"+href);
    console.log(" => "+href2+"\n");
  });
});
