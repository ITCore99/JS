/**
 * 此方法是用来判断一个变量的类型
 * 参数：data是要判断的数据（必填)。
 * @param {*} data 
 * 返回：返回一个字符串的类型。
 */
function getType(data)
{
    let value="";
    value=Object.prototype.toString.call(data);
    value=value.substr(8);//去除掉前面的object
    value=value.substr(0,value.length-1)//取除掉];
    value=value.toLowerCase();
    return value;
}
/**
 * 使用高阶函数来实现堆数据类型的判断
 *
 */
let arr=["String","Number","Boolean","Object","Function","Null","Undefine"];
let utils={};
arr.forEach(item=>{
    utils["is"+item]=isType(item);//通过外层的函数的参数保存要判断的量
});
function isType(type)
{
    return function(content)//通过内层函数求出传入参数的类型。
    {
       let t=Object.prototype.toString.call(content).replace(/\[object\s|\]/g,"");//通过正则表达式去除多余的部分
        return type==t;
    }
}
//测试。
//console.log(utils.isString("aaaa"));
/**
 * 此函数实现的是对对象的深拷贝
 * 参数：obj:表示要拷贝的对象
 * @param {*} obj 
 * @returns 返回的拷贝好对象
 */
function ObjectDeepClone(obj)
{   
    let newObj= Array.isArray(obj) ? []:{};//判断传进来的是数组函数对象。
    for(let p in obj)
    {  
        if(typeof obj[p]  == "object")//如果属性里面还是一个对象则继续调用对象拷贝方法。由于我们在拷贝基本数据类型时不会出错，而在拷贝应用类型时就会出错
                                      //所以我们就对这个引用类型进行判断。如果是数组和对象就会给他重新创建一个数组和对象。     
        {
            newObj[p]=clone(obj[p]);
        }else
        {
            newObj[p]=obj[p];
        }
    }
    return newObj;
}
/**
 * 此方法是手动的实现字符串的重复
 * 参数一：表示要重复的字符串
 * 参数二：表示要重复多少次
 * 返回：返回的是一个字符串。
 * @param {*} str 
 * @param {*} n 
 */
function RepeatString(str,n)
{   
    return new Array(n+1).join(str);
}
/**
 *如果在不使用let的情况下我们可以使用闭包立即执行函数来进行将所需的成i值进行保留。
 */
let lis=document.getElementsByTagName("li");
for(var i=0;i<lis.length;i++)
{
   lis[i].onclick=(function(index){
       return function()
       {
           console.log(index)
       }
   })(i);
}