
window.onload = function(){
    var i = 4;var a=document.getElementById('dataS');
    var timer = setInterval(function(){
        if(i== -1){
            clearInterval(timer);
        }else if(i>=0){
            a.innerHTML = i;
            --i;
            if(a.innerHTML==0){
               //location.href='aloneLogin.html';
                window.open('aloneLogin.html','_self');
            }
        }
    },500);
};
$("#aa").click(function(){
    window.open('aloneLogin.html','_self');
})