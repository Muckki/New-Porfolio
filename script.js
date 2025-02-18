let pageState = 0;
let pageTiming = 1000;
function changePages(el){
    if (pageState == 0) {
        pageState = 1;
        $(".pages").removeClass("active");
        setTimeout(() => {
            $(".pages").addClass("d-none");
            $(`[name=${$(el).attr('name')}`).removeClass("d-none").addClass("active");
            setTimeout(() => {
                pageState = 0;
            }, pageTiming);
        }, pageTiming);
    }else {
        // 도구 툴에 pageTiming 변경 가능하다고 안내 표시 활성화
    }
}

// pageTiming 변경하는 함수 추가 예정( 도구 툴 )