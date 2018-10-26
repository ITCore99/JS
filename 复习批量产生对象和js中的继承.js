/**批量的生产对象*/
/**方式1使用工厂模式*/
function react(w,h)
{
    let obj={};
    obj.width=w;
    obj.height=h;
    obj.getArea=function()
    {
        return this.width*this.height;
    }
    return obj;
}
let r1=react(1,1); console.log(r1.getArea())
let r2=react(2,2); console.log(r2.getArea())
console.log(r1.__proto__.constructor);// [Function: Object]
console.log(r2.__proto__.constructor);//[Function: Object]
/**缺点是：所有对象的构造器都执行object*/
/**使用构造器的方式*/
function React(w,h)
{
    this.width=w;
    this.height=h;
    this.getArea=()=>this.width*this.height;
}
let r3=new React(1,1); console.log(r3.getArea());
let r4=new React(2,2); console.log(r4.getArea());
console.log(r3.__proto__.constructor);//[Function: React]
console.log(r4.__proto__.constructor);//[Function: React]
/**优点：生产的对象那个有自己的构造器，缺点是：里面方法没有得到共享消耗了能存空间**/
/**使用原型+构造器的方式*/
function React2(w,h)
{
    if(!this.instanceOf===React2)
    {
        return new React2(w,h)
    }
    this.width=w;
    this.height=h;
}
React2.prototype.getArea=function(){ return this.width*this.height};
let r5=new React2(1,1); console.log(r5.getArea());
let r6=new React2(2,2); console.log(r6.getArea());
console.log(r5.__proto__.constructor);
/**原型+构造器是终极解决方案 对象有自己的构造器且公用的方法实现了共享*/

/***js继承的实现*/
/**1、字面量对象的继承：使用for循环加递归的法师进行实现*/
let laowang= {
    name:"老王",
    age:45,
    friends:["xiaoqiang","wangcai"],
}

function clone( FatherObj)
{
      let sonObj;
     Array.isArray(FatherObj) ?  sonObj=[] :sonObj={} ;

    for(p in FatherObj)
    {
        if( typeof FatherObj[p] == "object")
        {
            sonObj[p]=clone(FatherObj[p])
        }else
        {
            sonObj[p]=FatherObj[p];
        }
    }
    return sonObj;
}
let xiaowang=clone(laowang);
console.log(xiaowang);
console.log(xiaowang.friends.push("hello"));
console.log(xiaowang);
console.log(laowang);
console.log(Array.isArray(laowang.friends) );
/**这样就实现了字面量的继承和深拷贝*/

/**2、构造器的函数的继承**/
/**定义一个NBA球员构造器*/
function NBAplayer(name,age,height)
{
     this.name=name;
     this.age=age;
     this.height=height;
}
NBAplayer.prototype.say=function(){ console.log(`我是${this.name}我今年${this.age}我身高${this.height}cm`)};

let n1=new NBAplayer("库里",30,178);
n1.say();

/***创建一个MVP的球员类，其中MVP球员必须是球员类的*/
function MVPplayer(name,age,height,year)
{
   // NBAplayer.call(this,name,age,height) /**使用call方法来手动的改变this的指向使其执行MVP的对象实例，再执行NBAplayer时就是为MVP的实例对象进行设置属性*/
    //NBAplayer.apply(this,[name,age,height]);
    NBAplayer.bind(this,name,age,height)();
    this.year=year;

}
MVPplayer.prototype.mvpSay=function(){console.log(`我是${this.name}我今年${this.age}我身高${this.height}cm,我是${this.year}的MVP`)};
/**通过浅拷贝的方式实现父构造方法的继承*/
for(p in NBAplayer.prototype)
{
    MVPplayer.prototype[p]=NBAplayer.prototype[p];
}
let m1=new MVPplayer("科比","40","189","2015");
m1.mvpSay();
m1.say();
/**js中的构造器继承说白了就是使用call/apply/bind来进行this的指向的改变实现属性的继承，使用浅拷贝的方式实现福构造器方法的继承*/

/***使用es6的关键字class进行类的继承实现*/
class NBAplayerClass
{
    constructor(name,age,height)
    {
        this.name=name;
        this.age=age;
        this.height=height;
    }
    say()
    {
        console.log(`我是${this.name}我今年${this.age}我身高${this.height}cm`);
    }
}
let n=new NBAplayerClass("小库里",30,189);
n.say();
/**注意使用class类关键词时关键字extend可以自动实现方法的继承*/
class MVPplayerClass extends NBAplayerClass
{
    constructor(name,age,height,year)
    {
        super(name,age,height);
        this.year=year;
    }
    mvpSay()
    {
        console.log(`我是${this.name}我今年${this.age}我身高${this.height}cm,我是${this.year}的MVP`)
    }
}
let m=new MVPplayer("小科比",28,178,2019);
m.say();
m.mvpSay();
/**使用Object.create()来实现继承 是通过原型链来实现继承将父类添加到原型链上**/

let mObjectCreate=Object.create(NBAplayer);
console.dir(mObjectCreate);

