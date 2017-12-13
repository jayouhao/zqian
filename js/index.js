$(function(){
	function shq(){
		var shod=$('.topz img');
		var inp=$('#top .topz input');
		$('#top .topz input').focus(function(){
		$('#top .topz input').css({'padding-left':'0%'});
		$('.topz img').css({'display':'none'})
		$('#top .topz input').attr('placeholder','');				
		})
		touch.on(shod, 'touchstart' ,function(ev){
			ev.preventDefault();
		})
		touch.on(shod, 'touchstart', function(ev){
			$('#top .topz input').focus();
		})	
		touch.on(inp, 'touchstart', function(ev){
			$('#top .topz input').focus();
		})	
		//失去焦点	
		$('#top .topz input').blur(function(){
			$('#top .topz input').css({'padding-left':'11%'});
			$('.topz img').css({'display':'block'})
			$('#top .topz input').attr('placeholder','输入标题、用户名、类别或专业范铫');	
			var b=$('#top .topz input').val();
			if(b!=''){
				$('#top .topz input').val('')
			}
		})






/*				<div class="toptu">
					<img src="imges/0000_01.gif"/>
					<p>封面任务<span class="tua">/</span><span class="tub">背景</span></p>
				</div>
				<div class="toph">
					<p class="topha"> 中山大学政治学研究生，著《公有制的泥塘和私有制的外衣》    </p>
				</div>
				
				<div id="cententb">
					<span class="cenb"><img src="imges/4.jpg"/></span>
					<p class="cena"><span class="naa">杨洋日出生于上海</span><br/><span class="nab">-----籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系。</span><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sdfsdf。2008年，
						因在李少红版《红楼梦》中饰演成年贾宝玉而被观众熟知并正式出道；2010年凭借电视剧《红楼梦》中表现获
						得年度BQ红人榜“最佳新人奖”；2011年杨洋参演首部电影《建党伟业》；2015年因主演电影《左耳》中双
						面校草许弋和季播剧《盗墓笔记》中张起灵而获得关注，同年参与录制真人秀节目《花儿与少年第二季》，随后
						其主演的青春励志剧《旋风少女》取得全国同时段电视剧收视冠军。</p>
				</div>
				<div id="cententb" style="margin-top: 6vw;">
					<span class="cenb"><img src="imges/001.jpg"/></span>
					<p class="cena"><span class="naa">杨议案的介绍点</span><br/><span class="nab">-----籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系。</span><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国内地影视男演员。2008年，
						因在李少红版《红楼梦》中饰演成年贾宝玉而被观众熟知并正式出道；2010年凭借电视剧《红楼梦》中表现获
						得年度BQ红人榜“最佳新人奖”；2011年杨洋参演首部电影《建党伟业》；2015年因主演电影《左耳》中双
						面校草许弋和季播剧《盗墓笔记》中张起灵而获得关注，同年参与录制真人秀节目《花儿与少年第二季》，随后
						其主演的青春励志剧《旋风少女》取得全国同时段电视剧收视冠军。</p>
				</div>
				<div id="cententb" style="margin-top: 6vw;">
					<span class="cenb"><img src="imges/林沁园.jpg"/></span>
					<p class="cena"><span class="naa">林芯园的个人介绍</span><br/><span class="nab">-----籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系。</span><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国内地影视男演员。2008年，
						因在李少红版《红楼梦》中饰演成年贾宝玉而被观众熟知并正式出道；2010年凭借电视剧《红楼梦》中表现获
						得年度BQ红人榜“最佳新人奖”；2011年杨洋参演首部电影《建党伟业》；2015年因主演电影《左耳》中双
						面校草许弋和季播剧《盗墓笔记》中张起灵而获得关注，同年参与录制真人秀节目《花儿与少年第二季》，随后
						其主演的青春励志剧《旋风少女》取得全国同时段电视剧收视冠军。</p>
				</div>
				<div id="cententb" style="margin-top: 6vw;">
					<span class="cenb"><img src="imges/林沁园.jpg"/></span>
					<p class="cena"><span class="naa">林芯园的个人介绍</span><br/><span class="nab">-----籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系。</span><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国内地影视男演员。2008年，
						因在李少红版《红楼梦》中饰演成年贾宝玉而被观众熟知并正式出道；2010年凭借电视剧《红楼梦》中表现获
						得年度BQ红人榜“最佳新人奖”；2011年杨洋参演首部电影《建党伟业》；2015年因主演电影《左耳》中双
						面校草许弋和季播剧《盗墓笔记》中张起灵而获得关注，同年参与录制真人秀节目《花儿与少年第二季》，随后
						其主演的青春励志剧《旋风少女》取得全国同时段电视剧收视冠军。</p>
				</div>
				<div id="cententb" style="margin-top: 6vw;">
					<span class="cenb"><img src="imges/林沁园.jpg"/></span>
					<p class="cena"><span class="naa">林芯园的个人介绍</span><br/><span class="nab">-----籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系。</span><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国内地影视男演员。2008年，
						因在李少红版《红楼梦》中饰演成年贾宝玉而被观众熟知并正式出道；2010年凭借电视剧《红楼梦》中表现获
						得年度BQ红人榜“最佳新人奖”；2011年杨洋参演首部电影《建党伟业》；2015年因主演电影《左耳》中双
						面校草许弋和季播剧《盗墓笔记》中张起灵而获得关注，同年参与录制真人秀节目《花儿与少年第二季》，随后
						其主演的青春励志剧《旋风少女》取得全国同时段电视剧收视冠军。</p>
				</div>
				<div id="cententb" style="margin-top: 6vw;">
					<span class="cenb"><img src="imges/林沁园.jpg"/></span>
					<p class="cena"><span class="naa">林芯园的个人介绍</span><br/><span class="nab">-----籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系。</span><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国内地影视男演员。2008年，
						因在李少红版《红楼梦》中饰演成年贾宝玉而被观众熟知并正式出道；2010年凭借电视剧《红楼梦》中表现获
						得年度BQ红人榜“最佳新人奖”；2011年杨洋参演首部电影《建党伟业》；2015年因主演电影《左耳》中双
						面校草许弋和季播剧《盗墓笔记》中张起灵而获得关注，同年参与录制真人秀节目《花儿与少年第二季》，随后
						其主演的青春励志剧《旋风少女》取得全国同时段电视剧收视冠军。</p>
				</div>
				<div id="cententb" style="margin-top: 6vw;">
					<span class="cenb"><img src="imges/林沁园.jpg"/></span>
					<p class="cena"><span class="naa">林芯园的个人介绍</span><br/><span class="nab">-----籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系。</span><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国内地影视男演员。2008年，
						因在李少红版《红楼梦》中饰演成年贾宝玉而被观众熟知并正式出道；2010年凭借电视剧《红楼梦》中表现获
						得年度BQ红人榜“最佳新人奖”；2011年杨洋参演首部电影《建党伟业》；2015年因主演电影《左耳》中双
						面校草许弋和季播剧《盗墓笔记》中张起灵而获得关注，同年参与录制真人秀节目《花儿与少年第二季》，随后
						其主演的青春励志剧《旋风少女》取得全国同时段电视剧收视冠军。</p>
				</div>	*/




















//手机上下滑屏事件
var swiper = new Swiper('.swiper-container', {
	scrollbar: '.swiper-scrollbar',
	direction: 'vertical',
	slidesPerView: 'auto',
	mousewheelControl: true,
	freeMode: true,
	foundLengths: true,
})
		
		








				


























		
		//底部切换页面
		function dibu(){
			var fot=$('#yido .ofu li')
			touch.on(fot, 'touchstart', function(){
				var c=$(this).index()
				$(fot).eq(c).css({'color':'#13227a'}).siblings().css({'color':'#979797'});
				$(fot).find('.fue').css({'display':'inline'}).siblings('.fud').css({'display':'none'})
				$(fot).eq(c).find('.fue').css({'display':'none'}).siblings('.fud').css({'display':'inline'});
				if(c==0){
					$('#yido #toban').css({'display':'block'})
				}else{
					$('#yido #toban').css({'display':'none'})
				} 
				if(c==1){
					$('#yido #toxi').css({'display':'block'})
				}else{
					$('#yido #toxi').css({'display':'none'})
				}
				if(c==2){
					$('#yido #shqv').css({'display':'block'})
				}else{
					$('#yido #shqv').css({'display':'none'})
				} 
				if(c==3){
					$('#yido #lunt').css({'display':'block'})
				}else{
					$('#yido #lunt').css({'display':'none'})
				}
				if(c==4){
					$('#yido #yinh').css({'display':'block'})
				}else{
					$('#yido #yinh').css({'display':'none'})
				}	
			})
		}
		dibu()
	};
	shq();	
	
	
	
	//pc端
	function pc(){
		$('#pctop .top .topzho .topzoo').hover(function(){
			$('#pctop .top .topzho .topzoo').css({'border':'0.26em solid #fff'})		
		},function(){
			$('#pctop .top .topzho .topzoo').css({'border':'0.26em solid rgba(0,0,0,0.1)'})
		})	
		$('#pctop .top .topzho .inp1').focus(function(){
			$('#pctop .top .topzho .inp1').css({'padding-left':'0%'}).attr('placeholder','');
			$('#pctop .top .topzho .topzoo .shoo').stop().css({'display':'none'});
		})	
		$('#pctop .top .topzho .inp1','#pctop .top .topzho .topzoo ').click(function(){
			$('#pctop .top .topzho .inp1').focus();
		})
		$('#pctop .top .topzho .inp1').blur(function(){
			$('#pctop .top .topzho .inp1').css({'padding-left':'5%'}).attr('placeholder','请输入内容');
			$('#pctop .top .topzho .topzoo .shoo').css({'display':'inline'});
			$('#pctop .top .topzho .topzoo .shoj').css({'display':'inline'});
			var b=$('#pctop .top .topzho .inp1').val()
			if(b!=''){
				$('#pctop .top .topzho .inp1').val('')
			}
		})		
	};
	pc();	
})




/*//javascript移动模块
function gs2(d,a){
	if(d.currentStyle){
		
	}else{
		var curVal=document.defaultView.getComputedStyle(d, null)[a]
	}
	return curVal;
}
	if(document.getElementById){
		(
			function(){
				var n=200;
				function down(e){
					var temp=(typeof e.target!="undefined")?e.target:e.srcElement;
					if(temp.className=="tuo"){
						dragok=true;
						d=temp;
						dx=parseInt(gs2(temp,"left"))|0;
						dy=parseInt(gs2(temp,"top"))|0;
						x=e.clientX;
						y=e.clientY;
						document.onmousemove=move;
						return false;
					}
				}
				
				function move(e){
					if(dragok){
						d.style.left=dx+e.clientX-x+"px";
						d.style.top=dy+e.clientY-y+"px";
					}
				}
				
				function up(){
					dragol=false;
					document.onmousemove=null;
				}
				document.onmousedown=down;
				document.onmouseup=up;
			}
		)();
	}
*/