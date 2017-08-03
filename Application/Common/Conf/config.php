<?php
return array(
	//'配置项'=>'配置值'
    'URL_MODULE'        =>  2,              //URL模式
    'SESSION_AUTO_START'=>  true,           //session是否自动开启
    'DEFAULT_MODULE'        =>  'Admin',     // 默认模块
    'DEFAULT_CONTROLLER'    =>  'Index',    // 默认控制器名称
    'DEFAULT_ACTION'        =>  'index',    // 默认操作名称

    // 显示页面Trace信息'
    'SHOW_PAGE_TRACE' =>false,

    //模板替换常量
    'TMPL_PARSE_STRING'  =>array(
        '__Uploads__'   => '/Uploads',  //上传文件夹
        '__Public__'    => '/Public',   //public文件夹
    ),

    //数据库设置
    'DB_TYPE'               =>  'mysql',     // 数据库类型
    'DB_HOST'               =>  'localhost', // 服务器地址
    'DB_NAME'               =>  'fy_game',        // 数据库名
    'DB_USER'               =>  'root',      // 用户名
    'DB_PWD'                =>  '',          // 密码
    'DB_PORT'               =>  '3306',      // 端口
    'DB_PREFIX'             =>  'fy_',       // 数据表前缀


    'TMPL_L_DELIM'          =>  '{',         // 模板引擎普通标签开始标记
    'TMPL_R_DELIM'          =>  '}',         // 模板引擎普通标签结束标记

    'TMPL_DENY_PHP'         =>  false,      // 默认模板引擎是否禁用PHP原生代码

    'URL_HTML_SUFFIX'       =>  '',          //伪静态设置

);