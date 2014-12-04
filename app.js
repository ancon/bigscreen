var express=require('express')
var app=express()

//页面文件,使用.html后缀的ejs模板
app.set('views','./templates')
app.engine('html', require('ejs').renderFile)

//静态资源
app.use(express.static(__dirname, '/static'))

// app.get('/',function(req,res){
// 	res.render('index.html',{})
// })
app.get('/home',function(req,res){
	res.render('home.html',{})
})
app.get('/wall',function(req,res){
	res.render('wall.html',{})
})
app.get('/lottery',function(req,res){
	res.render('lottery.html',{})
})
app.get('/checkin',function(req,res){
	res.render('checkin.html',{})
})




//启动服务
app.listen(6543);
console.log('server start at port 6543....')