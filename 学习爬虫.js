var request=require("request");
var express=require("express");
const  cheerio=require("cheerio");
var app=express();
let html="";
app.get("/pachong",(req,res)=>{
    request('https://www.kancloud.cn/manual/thinkphp/1679', function (error, response, body) {
        console.log("进来没");
        const  $=cheerio.load(body);
         html = $(".content").html();
         console.log(html);
    });
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
            <div>
                 ${html}
            </div>
        </body>
        </html>
    `);
})
app.listen(4001,()=>{
    console.log("server start");
})