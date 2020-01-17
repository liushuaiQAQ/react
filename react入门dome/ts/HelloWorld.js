"use strict";
var a = "HelloWorld";
console.log(a);
var b = true;
var c = false;
var REN;
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.yao);
var t = 10;
t = "jspang";
t = true;
console.log(t);
function searchXiaoJieJie(age) {
    return '找到了' + age + '岁的小姐姐';
}
var age = 18;
var result = searchXiaoJieJie(age);
console.log(result);
function searchXiaoJieJie2(age, stature) {
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result = searchXiaoJieJie2(22, '大长腿');
console.log(result);
