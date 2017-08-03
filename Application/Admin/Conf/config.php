<?php
return array(
	//'配置项'=>'配置值'

    // 显示页面Trace信息'
    'SHOW_PAGE_TRACE' =>true,

    //模板替换常量
    'TMPL_PARSE_STRING'  =>array(
        '__AdminPublic__'   => '/Application/Admin/Public',
        '__Uploads__'   => '/Uploads',  //上传文件夹
        '__Public__'=>'/Public',//Public文件夹
    ),

    'TMPL_L_DELIM'          =>  '{',         // 模板引擎普通标签开始标记
    'TMPL_R_DELIM'          =>  '}',         // 模板引擎普通标签结束标记

    'TMPL_DENY_PHP'         =>  false,      // 默认模板引擎是否禁用PHP原生代码

    'URL_HTML_SUFFIX'       =>  '',          //伪静态设置
);