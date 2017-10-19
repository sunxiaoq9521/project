//实现 hover效果，原因（a标签被占用，无法使用hover）
var AddN1=document.getElementById("AddN1");
var AddN2=document.getElementById("AddN2");
var GouWu=document.getElementById("GouWu");
function Suer(){
	AddN1.onmouseover=function(){
		AddN1.style.color="#2698e4";
		AddN1.style.cursor="pointer"		
	};
};
Suer();
function Suer1(){
	AddN2.onmouseover=function(){
		AddN2.style.color="#2698e4";
	};
	AddN2.style.cursor="pointer"
};
Suer1();
function mouseout(){
	AddN1.onmouseout=function(){
		AddN1.style.color="white";
	}	
};
mouseout();
function mouseout1(){
	AddN2.onmouseout=function(){
		AddN2.style.color="white";
	}	
};
mouseout1();
function Gouwu(){
	GouWu.onmouseover=function(){
		GouWu.style.backgroundColor="orange";
	};
};
Gouwu();
function Gouwu1(){
	GouWu.onmouseout=function(){
		GouWu.style.backgroundColor="";
	};
};
Gouwu1();
//over

//《轮播图》效果实现
$(function(){
var m = 1;
function runPlay(){
	if (m > 1) {
		m = 0;
	}
	controlImage(m);
	m ++;
};
var timer = setInterval(runPlay, 3000);
$(".play-box").mouseenter(function(){
	clearInterval(timer);
}).mouseleave(function(){
	timer = setInterval(runPlay, 3000);
});
$(".icon-list span").mouseenter(function(){
	controlImage($(this).index());
	m = $(this).index() + 1;
});
function controlImage(n){
	$(".image-list a").removeClass("current").eq(n).addClass("current");
	$(".icon-list span").removeClass("current").eq(n).addClass("current");
	};
});
//效果结束

$(function(){
	$(".index_query .faq_dl_dd").click(function(){
		var num=$(this).index();console.log(num)
		if($(".warp-2").children().eq(num-1).css('display')=='none'){
			$(".warp-2").children().eq(num-1).css('display','block');
			$(".warp-2").children().eq(num-1).siblings().css('display','none')
		};
	});
});
   $(function(){
   	$("dd").click(function(){
   		$(this).addClass("DD-Color").siblings().removeClass("DD-Color");
   	})
   });
 //@用户名正则表达式 ／^\w[a-zA-Z0-9]{6,18}／
 //@密码正则表达式／^\w[a-zA-Z0-9]{6,18}$/
// 
$(function(){
	$("#Input01 input").blur(function(){
		var num=$(this).val();
		console.log(num)
		console.log(num.search(/^\w[1-9a-zA-Z]{6,16}$/))
		if(num.search(/^\w{6,16}$/)==0){
			alert(1);
		}else{
			alert(0);
		}
	})
})

$(function(){
	$('#textbox-div1').mousemove(function(){
		$('#textbox-div1').css('background','#2698e4').css('color','white').css('cursor','pointer')
	})
})
$(function(){
	$('#textbox-div1').mouseout(function(){
		$('#textbox-div1').css('background','').css('color','')
	})
})
$(function(){
	$('#textbox-div2').mousemove(function(){
		$('#textbox-div2').css('background','#2698e4').css('color','white').css('cursor','pointer')
	})
})
$(function(){
	$('#textbox-div2').mouseout(function(){
		$('#textbox-div2').css('background','').css('color','')
	})
})
$(function(){
	$('#textbox-div3').mousemove(function(){
		$('#textbox-div3').css('background','#2698e4').css('color','white').css('cursor','pointer')
	})
})
$(function(){
	$('#textbox-div3').mouseout(function(){
		$('#textbox-div3').css('background','').css('color','')
	})
})
$(function(){
	$('#textbox-div4').mousemove(function(){
		$('#textbox-div4').css('background','#2698e4').css('color','white').css('cursor','pointer')
	})
})
$(function(){
	$('#textbox-div4').mouseout(function(){
		$('#textbox-div4').css('background','').css('color','')
	})
})


 



