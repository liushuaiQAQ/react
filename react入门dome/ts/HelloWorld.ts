var a:string = "HelloWorld"
console.log(a)

var b:boolean = true
var c:boolean = false

enum REN{
    nan = '男',
    nv = '女',
    yao= '妖'
}
console.log(REN.yao)


var t:any =10 
t = "jspang"
t = true
console.log(t)


function searchXiaoJieJie(age:number):any{
    return '找到了'+age+'岁的小姐姐' 
}
var age:number = 18
var result:string = searchXiaoJieJie(age)
console.log(result)


function searchXiaoJieJie2(age:number,stature:string):string{

    let yy:string = ''
    yy = '找到了'+age+'岁'
    if(stature !=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'

}

var result:string  =  searchXiaoJieJie2(22,'大长腿')
console.log(result)