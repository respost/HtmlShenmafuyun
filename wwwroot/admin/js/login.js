// JavaScript Document
	//按下回车
	$(document).keyup(function(event){
		if(event.keyCode=="13"){//13表示回车键的代码
			adminLogin();
		}
	});
	//用户登录
	$("#admin_login").click(function(){
		adminLogin();								
	});
  
	//登录的方法
	function adminLogin(){
		var userName=$("#userName").val();
		var userPwd=$("#userPwd").val();
		var code=$("#code").val();
		var json={"userName":userName,"userPwd":userPwd,"code":code};	
		$.post("Admin_Login_Servlet",json,function(data){
			if(data=="vcError"){
				layer.msg('用验证码错误！', {icon: 5});
			}else if(data=="error"){
				layer.msg('用户名或密码错误！', {icon: 5});
			}else{
				location.href="main.jsp";							
			 }
		});
	}
