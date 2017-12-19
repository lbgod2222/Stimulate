$(function(){
	loadProperties('strings');
});

var flag = 0;

function loadProperties(str){
	jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
		name:str, //资源文件名称
		path:'static/i18n/', //资源文件路径
		mode:'map', //用Map的方式使用资源文件中的值
		callback: function() {//加载成功后设置显示内容
			//页面title
			$('#KONGMING_TITLE').html($.i18n.prop('string_TITLE'));
		    //导航header
			$('#header_Home').html($.i18n.prop('string_headerHome'));
			$('#header_Feature').html($.i18n.prop('string_headerFeature'));
			$('#header_Vision').html($.i18n.prop('string_headerVision'));
			$('#header_Apply').html($.i18n.prop('string_headerApply'));
			$('#header_Team').html($.i18n.prop('string_headerTeam'));
			$('#header_Contact').html($.i18n.prop('string_headerContact'));
			// header-interactive
			$('#header_interactive_download').html($.i18n.prop('header_interactive_download'));
			$('#header_interactive_i8n').html($.i18n.prop('header_interactive_i8n'));
			// featurePage
			$('#feature_title').html($.i18n.prop('feature_title'));
			$('#feature_sub1_title').html($.i18n.prop('feature_sub1_title'));
			$('#feature_sub1_content').html($.i18n.prop('feature_sub1_content'));
			$('#feature_sub2_title').html($.i18n.prop('feature_sub2_title'));
			$('#feature_sub2_content').html($.i18n.prop('feature_sub2_content'));
			$('#feature_sub3_title').html($.i18n.prop('feature_sub3_title'));
			$('#feature_sub3_content').html($.i18n.prop('feature_sub3_content'));
			$('#feature_sub4_title').html($.i18n.prop('feature_sub4_title'));
			$('#feature_sub4_content').html($.i18n.prop('feature_sub4_content'));
			$('#feature_sub5_title').html($.i18n.prop('feature_sub5_title'));
			$('#feature_sub5_content').html($.i18n.prop('feature_sub5_content'));
			$('#feature_sub6_title').html($.i18n.prop('feature_sub6_title'));
			$('#feature_sub6_content').html($.i18n.prop('feature_sub6_content'));
			// visionPage
			$('#vision_title').html($.i18n.prop('vision_title'));
			$('#vision_content').html($.i18n.prop('vision_content'));
			$('#vision_download').html($.i18n.prop('vision_download'));
			// applyPage
			$('#apply_sub1_title').html($.i18n.prop('apply_sub1_title'));
			$('#apply_sub1_content').html($.i18n.prop('apply_sub1_content'));
			$('#apply_sub2_title').html($.i18n.prop('apply_sub2_title'));
			$('#apply_sub2_content').html($.i18n.prop('apply_sub2_content'));
			$('#apply_sub3_title').html($.i18n.prop('apply_sub3_title'));
			$('#apply_sub3_content').html($.i18n.prop('apply_sub3_content'));
			$('#apply_sub4_title').html($.i18n.prop('apply_sub4_title'));
			$('#apply_sub4_content').html($.i18n.prop('apply_sub4_content'));
			$('#apply_sub5_title').html($.i18n.prop('apply_sub5_title'));
			$('#apply_sub5_content').html($.i18n.prop('apply_sub5_content'));
			$('#apply_sub6_title').html($.i18n.prop('apply_sub6_title'));
			$('#apply_sub6_content').html($.i18n.prop('apply_sub6_content'));
			// teamPage
			$('#team_title').html($.i18n.prop('team_title'));


		}
	});
}
function CHANGEL(){
	if (flag === 0) {
		loadProperties('strings')
		$('.i18n_btn i').css('right', '7px');
		$('.i18n_btn img').css('left', '-4px');
		flag = 1;
	} else {
		loadProperties('strings_en')
		$('.i18n_btn i').css('right', '30px');
		$('.i18n_btn img').css('left', '34px');
		flag = 0;
	}
}