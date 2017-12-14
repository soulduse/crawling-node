// load module
var request = require('request');
var fs = require('fs');

// URL 지정
var url = "http://jpub.tistory.com";
var savepath = "test.html";

// download
request(url).pipe(fs.createWriteStrea(savepath));
