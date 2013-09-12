#ajax二次封装
-------------
##使用范例
------------
ajaxutil("post","testAjax","cmd=update&uname=123123",true,function(req){
						var result = req.responseText;
						//var doc = req.responseXML;
						alert(result);
					} );
