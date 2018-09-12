/**
 * cookie的获取
 * @Param
 * @return Object
 */
function getCookie()
{
    let obj={};
    let strCoookies=document.cookie;
    let cookieArry=strCoookies.split(";");
    cookieArry.forEach(item=>{
        let key= item && item.split("=")[0].trim();
        let value= item && item.split("=")[1].trim();
        obj[key]=value;
    })
   console.log(obj)
}

/**
 * cookie的设置
 * @param key
 * @param vlaue
 * @param expire 秒数
 */
function setCookie(key,value,expire)
{
    if(!expire)
    {
        document.cookie=`${key}=${value}`;
    }else
    {
        let nowDate=+new Date();
        let newDate=expire*1000+nowDate;
        let strUTC=new Date(newDate).toUTCString();
        console.log(strUTC);
        document.cookie=`${key}=${value};expires=${strUTC}`

    }
}

/**
 * 修改cookie的值使用的原理是当两个cookie的值相同时后面的cookie会覆盖前面的cookie
 * @param key
 * @constructor
 */
function UpdateCookie(key)
{
    let value="";
    let nowDate=+new Date();
    let NewDate=nowDate-1000;
    let strDateUtc=new Date(NewDate).toUTCString();
    document.cookie=`${key}=${value};expires=${strDateUtc}`

}