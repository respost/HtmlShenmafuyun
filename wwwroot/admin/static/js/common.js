// JavaScript Document
	    //获取文件名，比如获取"D:/images/1.jpg" 中的1.jpg
	    function getFileName(file){
	    	var pos=file.lastIndexOf("\\");//查找最后一个\的位置
	        return file.substring(pos+1); //截取最后一个\位置到字符长度，也就是截取文件名 
		}
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
		//时间格式
	Date.prototype.format = function(fmt) { 
	     var o = { 
	        "M+" : this.getMonth()+1,                 //月份 
	        "d+" : this.getDate(),                    //日 
	        "h+" : this.getHours(),                   //小时 
	        "m+" : this.getMinutes(),                 //分 
	        "s+" : this.getSeconds(),                 //秒 
	        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
	        "S"  : this.getMilliseconds()             //毫秒 
	    }; 
	    if(/(y+)/.test(fmt)) {
	            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	    }
	     for(var k in o) {
	        if(new RegExp("("+ k +")").test(fmt)){
	             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	         }
	     }
	    return fmt; 
	};