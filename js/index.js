(function(){
	/*--------------------------在小屏下显示导航-----------------------------------*/
	$('.my-down-list').click(function(){
		$('.my-link').slideToggle("normal");
	});
	/*--------------------------点击向下按钮(或IT技能)跳到“IT技能处”-------------------------------*/
	var aimHeight=parseInt($('#my_skills')[0].offsetTop);
	var h3Height=parseInt($('#my_skills').height());
	var scroll=aimHeight-3*h3Height;
	$('.my_down').click(function(){
		$('html,body').animate({scrollTop:scroll},800);
	});
	$('.to_my_skills').click(function(){
		$('html,body').animate({scrollTop:scroll},800);
	});
	/*-----------------------点击“作品集”跳到作品展示处------------------------*/
	var workHeight=parseInt($('#my_workers')[0].offsetTop);
	var reScroll=workHeight+3*h3Height;
	$('.to_my_works').click(function(){
		$('html,body').animate({scrollTop:reScroll},800);
	});
	/*---------------------------用js向html中写数据-------------------------------------*/
	var lang=['Java','MySQL ','struts2','hibernate','spring','Ajax'];
	var langRate=['80%','75%','70%','70%','65%','60%','50%'];
	var parent=document.querySelector('.add_my_skills');
	var frag=document.createDocumentFragment();//创建文档片断
	for(var i=1;i<7;i++){
		var div_1=document.createElement('div');
		div_1.className='col-lg-2 col-md-4 col-sm-6 col-xs-12';
		var div_2=document.createElement('div');
		div_2.className='circle_out cr_0'+i;
		var div_3=document.createElement('div');
		div_3.className='circle_in';
		var p_1=document.createElement('p');
		p_1.innerHTML=lang[i-1];
		var p_2=document.createElement('p');
		p_2.innerHTML=langRate[i-1];
		div_1.appendChild(div_2);
		div_2.appendChild(div_3);
		div_3.appendChild(p_1);
		div_3.appendChild(p_2);
		frag.appendChild(div_1);
		parent.appendChild(frag);
	}
	/*-----------------------------用JQuery向html写数据--------------------------------------*/
	var worksTitle=['高考之友网','网上书城','SSH','BBS ','chat ','2048(网页版)'];
	var worksIntro=['项目负责：后台部分查询模块、数据部分导入、JUnit单元测试。此网站后台主要使用了struts2 + hibernate + MySQL搭建，对高考填报志愿提供帮助，根据不同的需求可以查询相关学校或专业录取信息。使用了正则表达式对数据进行处理校验。','此项目使用MVC设计模式，JSP + Servlet + MySQL搭建，完成了模拟网上书城购物。前台包含了带条件分页查询、购物车模拟、结账操作(包含验证)、Ajax页面跳转等。后台针对具体用户可以查询其交易记录。使用了自定义拦截器完成数据重新编码。','此项目使用struts2 + hibernate + spring + MySQL搭建，完成了员工信息的基本管理。实现了数据回显，使用了Ajax 完成数据的校验以及消息提示，自定义类型转化器完成了时间类的转换。','此项目使用MVC设计模式，JSP + Servlet + MySQL搭建，模拟BBS。前台可以进行添加新帖，回复信息等。后台进入管理员模式可以直接删除主题。对帖子进行分页展示。','此项目使用MVC设计模式，JSP + Servlet + MySQL搭建，模拟多人在线聊天系统，使用Ajax轮询完成消息的实时动态显示，并且显示在底部。','此项目使用servlet/service/dao三层架构，JSP + Servlet + MySQL搭建，完成网上搜索动态提示，即Suggestion样式，使用Ajax发送请求，hibernate从数据库中获取数据。','使用 Html+CSS+JS完成了小游戏2048，包括鼠标滑过换色，重新开始按钮，计算成绩，如果不能继续则会强制退出等。'];
	var worksLink=['javascript:;','https://github.com/steamed-bun/WebStore','https://github.com/steamed-bun/SSH','javascript:;','https://github.com/steamed-bun/chat','http://htmlpreview.github.io/?https://github.com/steamed-bun/2048/blob/master/game2048/WebRoot/index.html'];
	var $workParent=$('.my_workers_imgs');
	for(var i=1;i<7;i++){
		var $h3=$('<h3>'+worksTitle[i-1]+'</h3>');
		var $p=$('<p>'+worksIntro[i-1]+'</p>');
		var $div_3=$('<div class="rel_produce"></div>');
		$div_3.append($h3);
		$div_3.append($p);
		var $div_2=$('<div class="my_txt_mask"></div>');
		var $div_1=$('<div class="my_txt_par"></div>');
		$div_1.append($div_2);
		$div_1.append($div_3);
		var $a=$('<a class="my_work_img work_img_0'+i+'" href="'+worksLink[i-1]+'"></a>');
		$a.append($div_1);
		var $li=$('<li class="col-md-4 col-sm-6 col-xs-12"></li>');
		$li.append($a);
		$workParent.append($li);
	}
})();