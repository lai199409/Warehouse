document.write("<script language=javascript src='/HM/js/jquery/jquery-3.2.1.min.js'></script>");
document.write("<script language=javascript src='/HM/js/bootstrap/bootstrap.min.js'></script>");
document.write("<script language=javascript src='/HM/js/wangEditor3/wangEditor.min.js'></script>");
document.write("<link rel='stylesheet' type='text/css' href='/HM/css/bootstrap/bootstrap.min.css'>");
document.write("<link rel='stylesheet' type='text/css' href='/HM/css/public.css'>");

var urlstr = location.href;
var islogin = urlstr.indexOf("login");
if(islogin < 1){
	if(window.sessionStorage.getItem("login")==null){
		window.location.href="../login.html";
	}
}


window.onload = function(){
	 //入库模块
	   $("#storage").click(function(){
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./storagemanagement/storage.html");
		   });
	   });
	   
	   $("#storagelist").click(function(){
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./storagemanagement/storagelist.html");
		   });
	   });
	   
	   //出库模块
	   $("#outgoing").click(function(){
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./outgoingmanagement/outgoing.html");
		   });
	   });
	   
	   $("#outgoinglist").click(function(){
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./outgoingmanagement/outgoinglist.html");
		   });
	   });
	   
	   //仓库管理模块
	   $("#productclass").click(function(){
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./warehousemanagement/productclass.html");
		   });
	   });
	   
	   $("#stockinventory").click(function(){
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./warehousemanagement/stockinventory.html");
		   });
	   });
	   
	   //报表管理模块
	   $("#outgoingreport").click(function(){
	   		window.sessionStorage.setItem("customerclick","1");
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./customermanagement/outgoingreport.html");
		   });
	   });
	   
	   $("#storagereport").click(function(){
	   		window.sessionStorage.setItem("customerclick","2");
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./customermanagement/outgoingreport.html");
		   });
	   });
	   
	   //系统管理模块
	   $("#outgoinglog").click(function(){
	   		window.sessionStorage.setItem("logflag","1");
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./systemmanagement/log.html");
		   });
	   });
	   
	   $("#storagelog").click(function(){
	   		window.sessionStorage.setItem("logflag","2");
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./systemmanagement/log.html");
		   });
	   });
	   
	   $("#operationlog").click(function(){
	   		window.sessionStorage.setItem("logflag","3");
		   $("#left").animate({left:"100%"},1000,function(){
			   $("#leftview").load("./systemmanagement/log.html");
		   });
	   });
}



//$(document).ready(function(){
//	   //入库模块
//	   $("#storage").click(function(){
//		   $("#leftview").load("./storagemanagement/storage.html");
//	   });
//	   
//	   $("#storagelist").click(function(){
//		   $("#leftview").load("./storagemanagement/storagelist.html");
//	   });
//	   
//	   //出库模块
//	   $("#outgoing").click(function(){
//		   $("#leftview").load("./outgoingmanagement/outgoing.html");
//	   });
//	   
//	   $("#outgoinglist").click(function(){
//		   $("#leftview").load("./outgoingmanagement/outgoinglist.html");
//	   });
//	   
//	   //仓库管理模块
//	   $("#productclass").click(function(){
//		   $("#leftview").load("./warehousemanagement/productclass.html");
//	   });
//	   
//	   $("#stockinventory").click(function(){
//		   $("#leftview").load("./warehousemanagement/stockinventory.html");
//	   });
//	   
//	   //报表管理模块
//	   $("#outgoingreport").click(function(){
//		   $("#leftview").load("./customermanagement/outgoingreport.html");
//	   });
//	   
//	   $("#storagereport").click(function(){
//		   $("#leftview").load("./customermanagement/outgoingreport.html");
//	   });
//	   
//	   //系统管理模块
//	   $("#outgoinglog").click(function(){
//		   $("#leftview").load("./systemmanagement/log.html");
//	   });
//	   
//	   $("#storagelog").click(function(){
//		   $("#leftview").load("./systemmanagement/log.html");
//	   });
//	   
//	   $("#operationlog").click(function(){
//		   $("#leftview").load("./systemmanagement/log.html");
//	   });
// });