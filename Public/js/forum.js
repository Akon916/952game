$(document).ready(function(){
    $('#footer').load('data/footer.html')
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