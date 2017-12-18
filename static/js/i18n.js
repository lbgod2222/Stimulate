$(function(){
	loadProperties();
});

var flag = 0;

function loadProperties(){
	jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
		name:'strings_zh_CN', //资源文件名称
		path:'static/i18n/', //资源文件路径
		mode:'map', //用Map的方式使用资源文件中的值
		callback: function() {//加载成功后设置显示内容
			//用户名
			$('#label_username').html($.i18n.prop('string_username'));
		    //密码
			$('#label_password').html($.i18n.prop('string_password'));
		    //登录
			$('#button_login').val($.i18n.prop('string_login'));
		}
	});
}
function CHANGEL(){
	if (flag === 1) {
		jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
			name:'strings', //资源文件名称
			path:'resources/i18n/', //资源文件路径
			mode:'map', //用Map的方式使用资源文件中的值
			callback: function() {//加载成功后设置显示内容
				//用户名
				$('#label_username').html($.i18n.prop('string_username'));
				//密码
				$('#label_password').html($.i18n.prop('string_password'));
				//登录
				$('#button_login').val($.i18n.prop('string_login'));
			}
		});
		flag = 0;
	} else {
		jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
			name:'strings_en-EN', //资源文件名称
			path:'resources/i18n/', //资源文件路径
			mode:'map', //用Map的方式使用资源文件中的值
			callback: function() {//加载成功后设置显示内容
				//用户名
				$('#label_username').html($.i18n.prop('string_username'));
				//密码
				$('#label_password').html($.i18n.prop('string_password'));
				//登录
				$('#button_login').val($.i18n.prop('string_login'));
			}
		});
		flag = 1;
	}
}