/**
    자식 요소가 없으면 바로 내용이 출력된다!
*/

var parseString = require('xml2js').parseString;

var xml = "<item>Banana</item>";
var xml2 = "<kim>HyunWoo</kim>";

parseString(xml, function(err, result){
    console.log(result.item);
});


parseString(xml2, function(err, result){
    console.log(result.kim);
});
