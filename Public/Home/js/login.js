
   $('#login_all').click(function(){
       $('#login_second').css('display','block')
   });
  $('#close_login').click(function(){
      $('#login_second').css('display','none')
   });
    //模拟登录后状态
    $('#login_enter_one').click(function(){
        var name=$("#name_text_one").val();
        var pass=$("#name_pass_one").val();
        loginEnter(name);
    });
    $('#login_enter').click(function(){
        var name=$("#name_text").val();
        var pass=$("#name_pass").val();
        loginEnter(name);
    });
    function loginEnter(name) {
        $('#login_second').css('display','none');
        $('#login_all').html("欢迎回来:" + name);
        $('.login').css('display', 'none');
        $('#sign_out').css('display', 'block');
        $('#person_frame').css('display', 'block');
        $('#person_frame_login').html(name);
    }
        //退出，当前页面刷新
    $('#sign_out').click(function(){
        window.location.reload(true);
    });
    //个人中心退出
    $('#person_frame_close').click(function(){
        window.location.reload(true);
    });

   //收藏本站
   function AddFavorite(sURL, sTitle) {
       try {
           window.external.addFavorite(sURL, sTitle);
       }
       catch (e) {
           try {
               window.sidebar.addPanel(sTitle, sURL, "");
           }
           catch (e) {
               alert("加入收藏失败，请使用Ctrl+D进行添加");
           }
       }
   }
   //设为首页 <a onclick="SetHome(this,window.location)">设为首页</a>
   function SetHome(obj,vrl){
       try{
           obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
       }
       catch(e){
           if(window.netscape) {
               try {
                   netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
               }
               catch (e) {
                   alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
               }
               var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
               prefs.setCharPref('browser.startup.homepage',vrl);
           }
       }
   }
   //添加桌面
   function toDesktop(sUrl,sName){
       try {
           var WshShell = new ActiveXObject("WScript.Shell");
           var oUrlLink =          WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop")     + "\\" + sName + ".url");
           oUrlLink.TargetPath = sUrl;
           oUrlLink.Save();
       }
       catch(e)  {
           alert("当前浏览器不允许此操作，请手动添加");
       }
   }