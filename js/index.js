//下拉表单
$(document).ready(function(){
	$(".main").hover(function(){
	$(this).children("ul").slideDown();
},function(){
	$(this).children("ul").slideUp();
})
})

//图片切换
window.onload=init;
var i=1;
var dingshiqi;
function init(){
	var obj=document.getElementById("li1");
	obj.style.background="gray";
	dingshiqi=window.setInterval("picture()",2000);
}
function picture(){
	i++;
	if(i>5){
		i=1;
	}
var obj=document.getElementById("d1");
obj.style.height="316px";
obj.style.width="1155px";
obj.src="img/"+i+".jpg"
ys();
var yanse=document.getElementById("li"+i);
yanse.style.background="grey";
}

function stopTu(){
	window.clearInterval(dingshiqi);
}
function startTu(){
	dingshiqi=window.setInterval("picture()",2000);
}
function stopTtu(n,m){
	i=n;
	var obj=document.getElementById("d1");
	obj.src="img/"+n+".jpg";
	ys();
	window.clearInterval(dingshiqi);
	m.style.background="grey";
}
function startTtu(){
	dingshiqi=window.setInterval("picture()",2000);
}
function ys(){
  for(j=1;j<=5;j++){
		var Allobj=document.getElementById("li"+j);
		Allobj.style.background="#aaaaaa";
		}
}

//点击事件


