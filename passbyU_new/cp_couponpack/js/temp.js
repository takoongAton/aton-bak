// let pos;

// window.addEventListener('scroll', function(){
// 	pos = window.scrollY;
// });


// 툴팁 도움말
function layer_tooltip(ele) {
	$(".layer.help").hide();
	$(".layer.help").removeClass("active");
	let thisOffset  = ele.offset().top;
    let thisOffsetLeft  = ele.offset().left;
	let $targetHref = ele.attr("href");
	let targetId = $targetHref;

    $(targetId).css({
        top : thisOffset,
        marginTop : ele.outerHeight() + 10
    });

	$(targetId).show();
	$(targetId).addClass("active");

    let layerArrow = $(".layer.help span.arrow");
    $(layerArrow).css({
        left : thisOffsetLeft + (ele.outerHeight() / 2),
        zIndex : 2
    })
	return false;
}
$("a.help").on("click", function(e){
	layer_tooltip($(this));
	return false;
})
// 툴팁 도움말 end


$(".layer .btn_close, .layer .next").on("click", function(){
    $(this).parents(".layer").hide();
})


/*
function layer_tooltip222(ele) {
    let helpLayer = document.querySelectorAll(".layer.help");
    helpLayer.forEach(function(item){
		item.style.display = "none";
        item.classList.remove("active");
	})

    let thisOffsetTop  = ele.offsetTop;
    let thisOffsetLeft  = ele.offsetLeft;
	let $targetHref = ele.getAttribute("href");
	let targetId = document.querySelector($targetHref);

    targetId.style.display = "block";
    targetId.classList.add("active");
    targetId.style.top = thisOffsetTop + 'px';
    targetId.style.marginTop = ele.offsetHeight + 17 + 'px';
    

    let layerArrow = document.querySelector(".layer.help span.arrow");
    layerArrow.style.left = thisOffsetLeft + (ele.offsetHeight / 2) + 'px';
    layerArrow.style.zIndex = 2;
    return false;
}

const btnHelp  = document.querySelector("a.help");
if(btnHelp != null) {
    btnHelp.addEventListener("click", function(event){
        event.preventDefault();
        layer_tooltip222(this);
        return false;
    })
}
*/

const btnGroup = document.querySelector(".btn_Group");
if(btnGroup) {
    h = btnGroup.offsetHeight;
    console.log(h)
    const cpWrap = document.querySelector(".cp_wrap");
    cpWrap.style.paddingBottom = h + 'px';
}



/* 쿠폰 변경 하기 */
const couponList = document.querySelectorAll(".couponPack_change_item");
couponList.forEach(function(item){
    item.addEventListener("click", function(event){
        event.preventDefault();
        for(i=0; i < couponList.length; i++) {
            couponList[i].classList.remove("active");
        }
        this.classList.add("active");
        return false;
    })
})



/* 공지사항, 자주하는 질문 내용(회색영역) 최소 높이값 */
const viewCon = document.querySelector(".view_con");
if(viewCon) {
	const bodyHeight = document.querySelector("body").offsetHeight;
	const cpHeaderHeight =  document.querySelector(".cp_header").offsetHeight;
	const viewTitHeight = document.querySelector(".view_tit").offsetHeight;	
	if(cpHeaderHeight) {
		viewCon.style.minHeight = (bodyHeight - cpHeaderHeight - viewTitHeight) + 'px';
	} else {
		viewCon.style.minHeight = (bodyHeight - viewTitHeight) + 'px';
	}
}