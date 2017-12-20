var casper = require('casper').create({verbose: true, logLevel: "debug"});

// URL 및 로그인 정보 변수
var url = "https://searchad.naver.com/login";
var id = "";
var password = "";

casper.start().thenOpen("https://www.tistory.com/auth/login", function(){
    console.log("Naver Ad opened");
});

casper.then(function(){
    console.log("Login using username and password");
    this.evaluate(function(){
        documemt.getElementById("loginId").value = id;
        documemt.getElementById("password").value = password;
        documemt.getElementsByClassName("btn_login").click();
    });
});

casper.then(function(){
    casper.wait(3000);
    console.log("Make a screenshot and save it as AfterLogin.png");
    this.capture("AfterLogin.png");
});

casper.run();
