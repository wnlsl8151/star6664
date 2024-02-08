// import { font_base64 } from '/bizdemo132729/img/font.js';


// 체크시 견적 합산
var form_total=0;



function CheckChoice(whichbox) {
    if (whichbox.checked == false) { 
        form_total -= eval(whichbox.value); 
    } else { 
        form_total += eval(whichbox.value); 
    }
    document.myform.total.value = eval(form_total).toLocaleString('ko-KR');
}



function numberCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}





// 견적서 다운로드
function CheckEstimate() {
  if(form_total === 0){
alert("옵션11을 선택해주세요.");
return;
}





            html2canvas(document.getElementById('list')).then(canvas => {
                var imgData = canvas.toDataURL('image/jpeg', 1.0);
                var pdf = new jsPDF();


                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("download.pdf");
            });


}


function InitForm() {
    document.myform.total.value='0';



    for (xx=0; xx < document.myform.elements.length; xx++) {
       if (document.myform.elements[xx].type == 'checkbox') {
            document.myform.elements[xx].checked = false;
        }
    }
}



$("input:checkbox").on('click', function() {
    var chn = $("form input[type=checkbox]").length;
    $("#list div").html("");
    for (var i=0; i<chn; i++) {
        if ( $("input").eq(i).prop('checked') ) { 
            var pn = $("input").eq(i).parents("article").attr("class");
            var ph = $("input").eq(i).parent().find("p").html();
            $("#list #"+pn).append("<p>"+ph+"</p>");
        } 
    }
});


var bw = $("body").width();
$(window).resize(function(){
bw = $("body").width();
});


$(".gnb > li").has("ul").hover(
function(){
if (bw > 800) {
$(this).children("ul").slideDown(300);
}
},
function(){
if (bw > 800) {
$(this).children("ul").slideUp(300);
}
}
);



$(".gnb > li").has("ul").children("a").click(function(){
if (bw < 800) {
$(this).next().slideToggle(300);
return false;
}
});




// 컬러테마 선택
$(".bl").click(function(){
    $("body").addClass("bl");
});
$(".wh").click(function(){
    $("body").removeClass("bl");
});



// 이미지 클릭시 확대 
$("article > ul > li > img, article ul ul img").click(function(){
    $("html").addClass("fix");
    $("#pic").addClass("on");
    var isrc = $(this).attr("src");
    $("#pic img").attr("src", isrc);    
});



$(".picbox .xi-close-thin").click(function(){
    $("html").removeClass("fix");
    $(".picbox").removeClass("on");
    return false;
});





// 패키지 추가옵션 보기 
$("article h3").click(function(){
$("article h3").removeClass("on");


    $(this).addClass("on");
    $(this).next("ul").slideToggle(300);
});



// 패키지 이미지 클릭시 슬라이드 부분
$("article div img").click(function(){
    $("html").addClass("fix");
    $("#pkg").addClass("on");
    var path = $(this).attr("data-path");
    var pkg = $(this).attr("data-pkg");
    $("#pkg .slide").html("");
    for (var i=1; i<=5; i++) {
        $("#pkg .slide").append("<li><img src='"+path+"/"+pkg+"_"+i+".jpg'></li>")    
    }
});



$("#pkg .next").click(function(){
    $("#pkg .slide").animate({left:"-100%"},300,function(){
        $(this).append($("#pkg .slide li:first-child")).css({"left":"0"});
    })
});
$("#pkg .prev").click(function(){
    $("#pkg .slide").prepend($("#pkg .slide li:last-child")).css({"left":"-100%"}).animate({left:0},300);
});



// 모바일 견적체크 리스트 
$(".total a").click(function(){
    $("#list").toggleClass("on");
});



// 모바일 내비버튼
$("#nav_btn").click(function(){
    $(this).toggleClass("act");
    $("header").toggleClass("on");
});


/* 우측 체크 리스트 */
var an = $("form > article").length;
for (var i=1; i<=an; i++) {
    var at = $("form > article:nth-of-type("+i+") h2").text();
    $("#list").append("<h3>"+at+"</h3>");
    $("#list").append("<div id='cont"+i+"'></div>");


}


$("#list").append("<button id='btn_pdf' type='button'>견적서 출력</button>");
$("#list").append("<span class='btn_a_wrap'><a class='btn_a' href='tel:032-575-3966'>실시간 전화상담</a><a class='btn_a' href='https://pf.kakao.com/_XGpExj' target='_blank'>카카오톡 상담</a></span>");

var _fonts = "";