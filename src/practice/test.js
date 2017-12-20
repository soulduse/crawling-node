var casper = require('casper').create({
    pageSettings: {
        loadImages: false,//The script is much faster when this field is set to false
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    }
});

//open Facebook
casper.start().thenOpen("https://facebook.com", function() {
    console.log("Facebook website opened");
});

//로그인
casper.then(function(){
    console.log("해당 id와 pw로 로그인 합니다.");
    this.evaluate(function(){
        document.getElementById("email").value="";
            document.getElementById("pass").value="";
            document.getElementById("loginbutton").children[0].click();
    });
});

//스크린샷 찍고 페이지 저장하기
casper.then(function(){
    console.log("6초 후에 AfterLogin.png 으로 저장됩니다.");
    this.wait(6000, function(){
      // After 6 seconds, this callback will be called, and then we will capture:
      this.capture('AfterLogin.png');
      fs.write("./hello.html", this.getHTML(), "w")
    });
});

casper.run();
