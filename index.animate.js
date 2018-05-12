window.onload = function (){
    var curIndex=0;
//时间间隔 单位毫秒
    var timeInterval=3000;
    var arr=[];
    arr[0]="assets/banner.jpg";
    arr[1]="assets/bannera.jpg";
    arr[2]="assets/bannerb.jpg";

    setInterval(changeImg,timeInterval);
    function changeImg()
    {
        var banner=document.getElementById("banner");
        if (curIndex===arr.length-1)
        {
            curIndex=0;
        }
        else
        {
            curIndex+=1;
        }
        banner.style.background="url("+arr[curIndex]+") no-repeat bottom center";

    }
};


