let pageState = 0;
let pageTiming = 1000;
function changePages(el){
    if (pageState == 0 && !$(`div[name=${$(el).attr('name')}]`).hasClass("active")) {
        pageState = 1;
        $(".pages").removeClass("active");
        setTimeout(() => {
            $(".pages").addClass("d-none");
            $(`div[name=${$(el).attr('name')}]`).removeClass("d-none").addClass("active");
            setTimeout(() => {
                pageState = 0;
            }, pageTiming);
        }, pageTiming);
    }else {
        // 도구 툴에 pageTiming 변경 가능하다고 안내 표시 활성화
    }
}

let toolState = 0;
function toolClick(el){
    if (toolState == 0) {
        toolState = 1;
        $(el).toggleClass("active");
        setTimeout(() => {
            $(el).removeClass("active");
            toolState = 0;
        }, 700);
    }
}
// pageTiming 변경하는 함수 추가 예정( 도구 툴 ) , 로컬스토리지에 저장해 관리 추가

function changePageTiming(el){
    pageTiming = $(el).val()
}