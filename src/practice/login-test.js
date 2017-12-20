var casper = require('casper').create({
    verbose: true,
    logLevel: "debug",
    pageSettings: {
        loadImages: false,//The script is much faster when this field is set to false
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    }
});

//open Facebook
casper.start().thenOpen("https://searchad.naver.com/", function() {
    console.log("Tistory website opened");
});

casper.then(function(){
    this.sendKeys('#uid', "");
    this.sendKeys('#upw', "");
    this.click('.btn_login button');
    this.wait(10000);
});

casper.then(function(){
    this.evaluate(function(){
        document.querySelector(".system a").click();
    });

    this.wait(3000)
})
//
// // 마우스 클릭 이벤트
// casper.then(function(){
//     // 선택자에 해당하는 요소 확인 후 클릭
//     var path = ".system a";
//     if(casper.exists(path)){
//         casper.mouseEvent('click', path);
//     }
//     casper.wait(3000);
// });

casper.then(function(){
    console.log("Make a screenshot and save it as AfterLogin.png");
    this.capture("AfterLogin.png");
});

casper.run();
