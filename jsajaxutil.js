	function ajaxutil(method,url,data,async,hander200,loading,hander404,hander500){
			var request = null;
			if(window.XMLHttpRequest){
				request = new XMLHttpRequest();
			}else if(window.ActiveXObject){
				request = new ActiveXObject("Microsoft.XMLHTTP");
			}
			request.onreadystatechange=function(){
				if(4==request.readyState){
					if(200==request.status){
						if(hander200){
							 hander200(request);
							}
					}else if(404==request.status){
						if(hander404){
							hander404();
						}
					}else if(500==request.status){
						if(hander500){
							hander500();
						}
					}
				}else{
					if(loading){
						loading();
						}
				}
			}
			if("get"==method.toLowerCase()){
				if(data==null||data==""){
					request.open("get",url,async);
				}else{
					request.open("get",url+"?"+data,async);
				}
				request.send(null);
			}else if("post"==method.toLowerCase()){
				request.open("post",url,async);
				request.setRequestHeader("content-Type","application/x-www-form-urlencoded");
				request.send(data);
			}
			
		}
