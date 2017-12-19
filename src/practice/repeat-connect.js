var randomUA = require('random-fake-useragent');
var ua = randomUA.getRandom();
var casper = require('casper').create({verbose: true, logLevel: "debug"});

// URL 및 로그인 정보 변수
var url = "https://searchad.naver.com/login";
var id = "";
var password = "";

casper.start().thenOpen(url, function(){
    console.log("Naver Ad opened");
});

casper.then(function(){
    console.log("Login using username and password");
    this.evaluate(function(){
        documemt.getElementById("uid").value = id;
        documemt.getElementById("upw").value = password;
        documemt.getElementById("btn_login").click();
    });
});

casper.then(function(){
    console.log("Make a screenshot and save it as AfterLogin.png");
    this.capture("AfterLogin.png");
});

casper.run();
