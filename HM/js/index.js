$(function(){
	$("#user").append(window.sessionStorage.getItem("username"));
	$("#exitsys").click(function(){
		window.sessionStorage.removeItem("login");
		window.sessionStorage.removeItem("username");
		window.location.href = "../login.html";
	});
	
});