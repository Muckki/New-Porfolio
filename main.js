$(function(){
    const button1 = `<button type="button" cd="1" onclick="javascript:mainButtonClick(this)">일신디자인</button>`;
    const button2 = `<button type="button" cd="2" onclick="javascript:mainButtonClick(this)">기적기획</button>`;
    const button3 = `<button type="button" cd="3" onclick="javascript:mainButtonClick(this)">최강</button>`;

    const buttons = [button1, button2, button3];

    function shuffle(array){
        for (let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(buttons)

    buttons.forEach(button => {
        $(".main-sub-02").append(button);
    });
})

function mainButtonClick(el){
    if( $(el).attr("cd") == "2" ){
        location.href = "./webs/portfolio.html"
    }else if ( $(el).attr("cd") == "1" ) {
        $(el).attr('disabled','true').css('cursor',"not-allowed")   
    }else {
        $(el).addClass("wrong-btn")
    }
}