function startTime() {
    var today=new Date();
    var h=checkTime(today.getHours());
    var m=checkTime(today.getMinutes());
    var s=checkTime(today.getSeconds());
    document.getElementById('clock').innerHTML=h+":"+m+":"+s;
    
    
    var D=checkTime(today.getDate());
    var M=checkTime(today.getMonth()+1);
    var Y=checkTime(today.getFullYear());
    document.getElementById('date').innerHTML=D+"/"+M+"/"+Y;
    
    t=setTimeout('startTime()', 120)
}

function checkTime(i) {
    if (i<10) {
        i="0" + i;
    }
    return i
}
window.onload=startTime;

