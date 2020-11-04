// JavaScript Document
$(document).ready(function() {
	//按下回车
	$(document).keyup(function(event){
		if(event.keyCode=="13"){//13表示回车键的代码
			userLogin();
		}
	});
    //用户登录
	$("#login_submit").click(function(){
		userLogin();								
	});
	//登录的方法
	function userLogin(){
		var userName=$("#userName").val();
		var userPwd=$("#userPwd").val();	
		var json={"userName":userName,"userPwd":userPwd};	
		$.post("User_Login_Setvlet",json,function(data){		
			if(data=="error"){
				alert("用户名或密码错误！");
			}else{
				var user = $.parseJSON(data);
				//显示用户信息
				if(user.nick!=null&&user.nick!=""){
					$("#nick").html(user.nick);
				}else{
					$("#nick").html(user.name);
				}
				if(user.picPath!=null&&user.picPath!=""){
					$("#headPic").attr('src',user.picPath);
				}										
				
				//判断是否为index.jsp首页，不是就跳转回首页
				var page=GetQueryString("page");
				if(page==null||page==""){
					//刷新首页会员信息			
				/*	$("#notLogged").hide();
					$("#loggedln").show();
					$(".name_user").html(user.name);
					$(".name_money").html(user.money+user.avail);
					$(".name_date").html(user.loginDate);
					$(".name_ip").html(user.ip);*/
				
					location.href="index.jsp";
				}else if(page=="reg") {					
					parent.goToHome();//如果是注册页，先跳回主页，再关掉弹出层
					closeLayer();
				}					
			 }
		});
	}

	//登录窗口样式
	$("#login_right ul li div").eq(0).show();//默认显示第一个
	$("#login_right ul li").hover(function(){
		$(this).children("h5").addClass("h5_current").removeClass("h5_default");
		$(this).siblings().children("h5").addClass("h5_default").removeClass("h5_current");
		$(this).children("div").show();
		$(this).siblings().children("div").hide();
	});

});
	//获取url?传送过来的值
	function GetQueryString(name) { 
	  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	  var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
	  var context = ""; 
	  if (r != null) 
	     context = r[2]; 
	  reg = null; 
	  r = null; 
	  return context == null || context == "" || context == "undefined" ? "" : context; 
	}
	//关闭弹出层
	function closeLayer(){
		var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
		parent.layer.close(index);//关闭弹出框
	}
