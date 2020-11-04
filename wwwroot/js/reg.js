// JavaScript Document	
	$(document).ready(function(){ 
		//<!----------------------------------------------------注册表单验证 start------------------------------------------------------------->
		//1.失去焦点时，开始检测
		$("#name").blur(checkName);
		$("#email").blur(checkEmail);
		$("#pwd").blur(checkPwd);
		$("#repwd").blur(checkRepwd);
		$("#phone").blur(checkPhone);
		$("#qq").blur(checkqq);
		$("#agree").blur(checkAgree);
		//2.提交表单
		$("#regbox form").submit(function(){
			var flag=true;
			if(!checkName()) flag=false;
			if(!checkEmail()) flag=false;
			if(!checkPwd()) flag=false;
			if(!checkRepwd()) flag=false;
			if(!checkPhone()) flag=false;
			if(!checkqq()) flag=false;
			if(!checkAgree()) flag=false;
			return flag;
		});
		//<!----------------------------------------------------注册表单验证 end--------------------------------------------------------------->
	});
	
	//验证用户名
	function checkName(){
		var name=$("#name").val().trim();
		var regName=/^\w{4,20}$/;
		if(regName.test(name)==false){
			$("#name_promt").show();
			$("#name_promt").addClass("regwrong").removeClass("regok");
			$("#name_promt").html("请输入有效的帐号(4-20位字母、数字或下划线组合)");
			return false;
		}else{
			$("#name_promt").show();
			$("#name_promt").addClass("regok").removeClass("regwrong");
			$("#name_promt").html("恭喜,输入正确！")
			return true;
		}
	}
	//验证邮箱
	function checkEmail(){
		var email=$("#email").val().trim();
		var regEmail=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
		if(regEmail.test(email)==false){
			$("#email_promt").show();
			$("#email_promt").addClass("regwrong").removeClass("regok");
			$("#email_promt").html("邮箱格式不正确，例如：smfy@qq.com");
			return false;
		}else{
			$("#email_promt").show();
			$("#email_promt").addClass("regok").removeClass("regwrong");
			$("#email_promt").html("恭喜,输入正确！")
			$("#regStep li:eq(1)").addClass("active").siblings().removeClass("active");
			return true;
		}
	}
	//验证密码
	function checkPwd(){
		var pwd=$("#pwd").val().trim();
		var regPwd=/^[0-9a-zA-Z]{6,20}$/;
		if(regPwd.test(pwd)==false){
			$("#pwd_promt").show();
			$("#pwd_promt").addClass("regwrong").removeClass("regok");
			$("#pwd_promt").html("密码由英文字母和数字组成的6-20位字符");
			return false;
		}else{
			$("#pwd_promt").show();
			$("#pwd_promt").addClass("regok").removeClass("regwrong");
			$("#pwd_promt").html("恭喜,输入正确！")
			return true;
		}
	}
	//确认密码
	function checkRepwd(){
		var pwd=$("#pwd").val().trim();		
		var repwd=$("#repwd").val().trim();
		if(pwd==""){
			$("#repwd_prompt").html("");
			return false;
		}
		if(repwd!=pwd){
			$("#repwd_promt").show();
			$("#repwd_promt").addClass("regwrong").removeClass("regok");
			$("#repwd_promt").html("输入的密码不一致");
			return false;
		}else{
			$("#repwd_promt").show();
			$("#repwd_promt").addClass("regok").removeClass("regwrong");
			$("#repwd_promt").html("恭喜,输入正确！")
			return true;
		}
	}
	//验证手机
	function checkPhone(){
		var phone=$("#phone").val().trim();
		var regPhone=/^1[0-9]{10}$/;	
		if(regPhone.test(phone)==false){
			$("#phone_promt").show();
			$("#phone_promt").addClass("regwrong").removeClass("regok");
			$("#phone_promt").html("手机号码只能是1开头的11位数字");
			return false;
		}else{
			$("#phone_promt").show();
			$("#phone_promt").addClass("regok").removeClass("regwrong");
			$("#phone_promt").html("恭喜,输入正确！")
			return true;
		}
	}
	//验证QQ
	function checkqq(){
		var qq=$("#qq").val().trim();
		var regqq=/^[0-9]{4,}$/;	
		if(regqq.test(qq)==false){
			$("#qq_promt").show();
			$("#qq_promt").addClass("regwrong").removeClass("regok");
			$("#qq_promt").html("QQ号码要求4位以上数字");
			return false;
		}else{
			$("#qq_promt").show();
			$("#qq_promt").addClass("regok").removeClass("regwrong");
			$("#qq_promt").html("恭喜,输入正确！")
			return true;
		}
	}
	//验证同意条款
	function checkAgree(){
		var agree=$("#agree:checked").val();
		if(agree==null){
			$("#agree_promt").show();
			$("#agree_promt").addClass("regwrong").removeClass("regok");
			$("#agree_promt").html("请选择同意条款");
			return false;
		}else{
			$("#agree_promt").hide();
			return true;
		}
	}			
	
