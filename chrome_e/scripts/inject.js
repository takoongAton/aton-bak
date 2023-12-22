// 화면에 뜨면 삭제 하는 것들.
let delArr = [
    ".fc-ab-root", // 광고 차단 허용, 스크롤 강제막기 삭제
    ".wing_tmp", // 다음 메인 쇼핑 광고.
    "#coupang-banner", // 쿠팡 상단 광고
    ".gnb_bnr_wrap", // SSG.COm 상단 광고
    ".box__component-bigs-filter", // G마켓 플로팅 배너
    ".ad_section", // 네이버 검색 파워링크
    "#naver_ad_MenuUnder", // 네이버 스마트 스토어 광고
    "#Banner1", // 잡코리아 상단 광고
    "#newsstand + a" // 네이버 메인 모듈 광고 Layout-module__banner_area ()
];

// 삭제하면 오류가 나서 숨겨만 놔야 하는 것들.
let hiddenArr = [
    ".AdBanner_display_ad_area__s3FEt",
    "#gladbanner.banner_wrap",
    "#view_ad02 + span"
];

function hiddenAction(){
    document.body.style.overflow = "";
    const delList = document.querySelectorAll(delArr);
    if(delList.length > 0) {
        delList.forEach(function(item){
            item.remove();
        })
    }

    const hiddenList = document.querySelectorAll(hiddenArr);
    if(hiddenList.length > 0) {
        hiddenList.forEach(function(item){
            item.style.margin = "0";
            item.style.padding = "0";
            item.style.height = "0";
            item.style.overflow = "hidden";
            item.style.opacity = "0";
            item.style.minHeight = "0";
        })
    }
    
    sizeResizeNaver(); // 네에버 스마트 스토어 탭 메뉴 높이값 줄이기.
}

function fnObserver(){
    const elementToObserve = document.querySelector('body');
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type == 'childList'){
                hiddenAction();
            }
        });
    });

    const config = {
        attributes:false, 
        childList:true, 
        characterData:false, 
        subtree:true
    };

    observer.observe(elementToObserve, config);
    
    // observer.disconnect();
}

fnObserver();

/* 네이버 스마트 스토어 상단메뉴 높이값 줄이기 */
function sizeResizeNaver(){

    let aaa = document.querySelectorAll(".content-header-tab-group .item .tab");
    let bbb = document.querySelectorAll("a.LocalNavigationBar_link__RuoyC");
    let ccc = [...aaa,...bbb];

    if(ccc.length > 0) {
        ccc.forEach(function(item){
            item.style.paddingTop = "17px";
            item.style.paddingBottom = "16px";
            item.style.transition = "0.2s all ease";
            console.log("=============")
        });
    }
}


window.addEventListener("load", function(){
    const url = window.location.href;

    /* 다음 뉴스 */
    if (url.indexOf("v.daum.net")){
        let daumAside = document.querySelector("body aside.main-etc");
        if(daumAside) {
            conAreaHidden(daumAside);
        }
        let mainContent = document.querySelector("div.main-content");
        if(mainContent) {
            conAreaExtend(mainContent);
            mainContent.style.margin = "0 auto";
        }
        let ttalkView = document.querySelector("div.ttalk_view");
        if(ttalkView) {
            conAreaHidden(ttalkView);
        }

        let adBody2 = document.querySelector("div.ad_body2")
        if(adBody2) {
            console.log("asdfasdfasdfliajeswfil")
            conAreaHidden(adBody2);
        }
    }

    // 네이버 메인
    if (url.indexOf("www.naver.com")){
        // "#newsstand + a" // 네이버 메인 모듈 광고 Layout-module__banner_area ()
        // 로딩 후 추가 삽입으로 인해 불가.
    }
    
    /* 네이버 뉴스 */
    if (url.indexOf("news.naver.com")){
        console.log(url)
        let outsideArea = document.querySelector(".outside_area");
        if(outsideArea) {
            conAreaHidden(outsideArea);
        }

        let mainAside = document.querySelector("aside.main_aside");
        if(mainAside) {
            conAreaHidden(mainAside);
        }

        let newsctWrapper = document.querySelector(".newsct_wrapper");
        if(newsctWrapper) {
            newsctWrapper.style.margin = "0 auto";
            newsctWrapper.style.padding = "30px 0";
            newsctWrapper.style.zIndex = 1;
        }

        // 언론사 구독 후 기사보기
        let subscribeCtaLayer = document.querySelectorAll(".subscribe_cta_layer")
        if(subscribeCtaLayer.length > 0){
            subscribeCtaLayer.forEach(function(item){
                conAreaDel(item);
            })
        }

        let pressAside = document.querySelector("section.press_aside");
        if(pressAside) {
            conAreaDel(pressAside);
        }
    }

    /* 이데일리 뉴스 */
    if(url.indexOf("edaily.co.kr")){

        let add01 = document.querySelector(".election_2022.government.sp_sub + span");
        if(add01) {
            conAreaStyle(add01);
        }
        let aside = document.querySelector("#aside_right");
        if(aside) {
            conAreaStyle(aside);
        }

        let floatingBnr = document.querySelector("section.center1080.position_r > span");
        if(floatingBnr) {
            conAreaStyle(floatingBnr);
        }

        let contentBnr = document.querySelector("br + span");
        if(contentBnr) {
            conAreaStyle(contentBnr);
        }

        let secondTextAD = document.querySelector(".second_textAD");
        if(secondTextAD) {
            conAreaDel(secondTextAD);
        }

        let newsDomino = document.querySelector(".news_domino");
        if(newsDomino) {
            conAreaDel(newsDomino);
        }

        let articleNewsetc = document.querySelector(".article_newsetc");
        if(articleNewsetc) {
            conAreaDel(articleNewsetc);
        }

        let newsAuthor = document.querySelector(".stiky_newscontainer");
        if(newsAuthor) {
            conAreaDel(newsAuthor);
        }
    }

    // 한겨례 뉴스
    if(url.indexOf("hani.co.kr")){
        let aRight = this.document.querySelector(".a-right");
        let aLeft = this.document.querySelector(".a-left");
        if(aRight) {
            conAreaDel(aRight);
            conAreaExtend(aLeft)
            aLeft.style.margin = "0 auto";
            aLeft.style.padding = "0";
        }

        let adBox01 = this.document.querySelector("#ad_box01")
        let adBox01div = this.document.querySelector("#ad_box01 + div")
        if(adBox01) {
            conAreaStyle(adBox01div);
            conAreaDel(adBox01);
            aLeft.style.margin = "0 auto";
        }

        let articleText = this.document.querySelectorAll(".article-text ~ div")
        articleText.forEach(function(item){
            conAreaStyle(item);
        })
    }


    // etoday.co.kr/news
    if(url.indexOf("etoday.co.kr/news")){
        let rContentModule = this.document.querySelector(".r_content_module");
        let lContentModule = this.document.querySelector(".l_content_module");
        if(rContentModule) {
            conAreaStyle(rContentModule);
            conAreaExtend(lContentModule)
        }

        let quickLeft = this.document.querySelector("#quick_left");
        if(quickLeft) {
            conAreaStyle(quickLeft);
        }

        let quickRight = this.document.querySelector("article.containerWrap > span");
        if(quickRight) {
            conAreaStyle(quickRight);
        }

        let viewInnerAd = this.document.querySelector(".articleView > p + span");
        if(viewInnerAd) {
            conAreaStyle(viewInnerAd);
        }

        // 주요 뉴스
        let majListWrap = this.document.querySelector(".maj_list_wrap"); 
        let majListWrapSpan = this.document.querySelector(".maj_list_wrap + span"); 
        if(majListWrap) {
            conAreaStyle(majListWrap);
            conAreaStyle(majListWrapSpan);
        }
    }

    // av19.org
    if(url.indexOf("av19.org")){
        let siteContent = this.document.querySelector(".site-content.row");
        let aLeft = this.document.querySelector(".a-left");
        if(siteContent) {
            conAreaDel(siteContent);
        }
    }


    // danawa.com
    if(url.indexOf("prod.danawa.com")){
        // 메인 페이지
        // 메인 중앙 배너 영역 삭제
        let mainMiddlebnr = this.document.querySelector("#main-middlebnr");
        if(mainMiddlebnr) {
            conAreaDel(mainMiddlebnr, true);
            // this.document.querySelector(".main-info").style.marginTop = "14px";
        }

        // 다나와 상단 광고,
        let ttopBanner = this.document.querySelector(".ttop_banner");
        if(ttopBanner) {
            conAreaDel(ttopBanner, false);
        }

        // 상단 서브 메뉴 (비교사이트)
        let cwGnb = this.document.querySelector(".cw-gnb");
        if(cwGnb) {
            conAreaDel(cwGnb, false);
        }

        // 상품 목록 상단 광고 영역 애드 리더
        let mainAdReader = this.document.querySelector("#mainAdReader");
        if(mainAdReader) {
            conAreaDel(mainAdReader, true);
        }

        // 상품 목록 중간 광고 영역 : 애드 포인트
        let adPointArea = this.document.querySelector("#adPointArea");
        if(adPointArea) {
            conAreaDel(adPointArea, true);
        }

        // 왼쪽 날개배너 프리미엄 배너
        let premiumBanner = this.document.querySelector("#premiumBanner");
        if(premiumBanner) {
            conAreaDel(premiumBanner, false);
        }

        // 상품 목록 페이지 상단 광고 영역 : 이런 상품 어때요
        let naverPowerShoppingArea = this.document.querySelector("#naverPowerShoppingArea");
        if(naverPowerShoppingArea) {
            conAreaDel(naverPowerShoppingArea, true);
        }

        // 상품 목록 페이지 하단 광고 영역 : 파워클릭
        let ebayPowerClickBottomArea = this.document.querySelector("#ebayPowerClickBottomArea");
        if(ebayPowerClickBottomArea) {
            conAreaDel(ebayPowerClickBottomArea, true);
        }

        // 상품목록 우측 영역        
        let asideMedia = this.document.querySelector(".aside_media");
        if(asideMedia) {
            let danawaContainer = this.document.querySelector("#danawa_container");
            if(danawaContainer) {
                danawaContainer.style.paddingRight = "0";
            }
            conAreaDel(asideMedia, false);
        }
    }

})

/* 불필요한 내용 숨기기 */
function conAreaHidden(item){
    item.style.display = "none";
}

/* 컨텐츠 영역 확장 */
function conAreaExtend (item){
    // item.style.width = "auto";
    // item.style.maxWidth = "100%";
    item.style.float = "none";
    item.style.margin = "0 auto";
    item.style.padding = "0";
}

function conAreaDel(item, state){
    if(true == state){
        testDivInsert(item)
    }
    item.remove();
}

function conAreaStyle(item){
    item.style.position = "absolute";
    item.style.top = "0px";
    item.style.left = "0px";
    item.style.width = "0px";
    item.style.minWidth = "0px";
    item.style.height = "0px";
    item.style.minHeight = "0px";
    item.style.margin = "0px";
    item.style.padding = "0px";
    item.style.opacity = "0";
    item.style.overflow = "hidden";
}

function testDivInsert(target){
    const testDiv = document.createElement("div");
    testDiv.classList.add("test123")
    let tempconInner = `
    <style>
    .test123 {margin:1px; padding:10px; background-color:#f9f9f9; color:#666; font-size:12px; line-height:1em; text-align:center;}
    </style>
    <div><span>광고영역 제거됨 / 광고를 제거해서 화면을 넓게 써보자.</span></div>`;
    testDiv.innerHTML = tempconInner;
    target.parentNode.insertBefore(testDiv, target.nextSibling);
}