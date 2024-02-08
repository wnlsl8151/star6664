/* 견적요약 리스트 */
var an = $("form article").length;
for (var i=0; i<an; i++) {
    var ai = $("form article").eq(i).find("h2").text();
    var at = $("form article").eq(i).find("h2").find("input").val();
    var as = $("form article").eq(i).find("h6").text();
    var ac = $("form article").eq(i).attr("class");
    if (at > 1) {
        $("#list").append("<h2 class='dn'><span>"+ai+"</span><b>"+Math.ceil(at / 1.1).toLocaleString('ko-KR')+"</b></h2>");        
    }  else {
        if (ai != "") {
            $("#list").append("<h2 class='dn'><span>"+ai+"</span></h2>");        
        }
    }
    
    if (as) {
        $("#list").append("<h6 class='dn'>"+as+"<b></b></h6>");    
    }
    if (ac) {
        $("#list").append("<div id='"+ac+"'></div>");
    }
    
}

$(".nocheck input").prop("disabled", true);




/* 체크박스 클릭시 견적요약 등록 */
$("input:checkbox").on('click', function() {
    var chn = $("form input[type=checkbox]").length;

    $("#list div").html("");
    $("#list h2").addClass("dn");
    $("#list h6").addClass("dn");
    
    for (var i=0; i<chn; i++) {
            
        if ( $("input").eq(i).prop('checked') ) { 
            var pclass = $("input").eq(i).parents("article").attr("class");
            var ptitle = $("input").eq(i).parent("h2").find("input").val();
            var psubject = $("input").eq(i).next("label").html();
            var pprice = Math.ceil($("input").eq(i).val() / 1.1).toLocaleString('ko-KR');
            if ( pprice == 0 ) {
                pprice = "";
            }
            
            $("#list #"+pclass).prev("h2, h6").removeClass("dn");
            $("#list #"+pclass).prev().prev("h2, h6").removeClass("dn");
            
            if (psubject != undefined) {
                $("#list #"+pclass).append("<p><span>"+psubject+"</span><b>"+pprice+"</b></p>");    
            }
        } 
    }
});


// 체크시 견적 합산
var form_total=0;
function CheckChoice(whichbox) {
    if (whichbox.checked == false) { 
        form_total -= eval(whichbox.value); 
    } else { 
        form_total += eval(whichbox.value); 
    }
    // 부가세 별도 가격표시
    document.myform.total.value = Math.ceil(form_total / 1.1).toLocaleString('ko-KR');
    
}

/* 모바일일때 2의 배수*/
var bw = $("body").width();
if (bw < 800) {
    $(".blank").remove();
}
$(window).resize(function(){
    bw = $("body").width();
    if (bw < 800) {
        $(".blank").remove();
    }
});


// 모바일 견적요약 리스트 보기
$(".total a").click(function(){
    $("#list").addClass("on");
});

$("#list .xi-close-thin").click(function(){
    $("#list").toggleClass("on");
});



// 카테고리 선택
$(".w_cate li").click(function(){
    $(".w_cate li").removeClass("on");
    $(this).addClass("on");
});


// 하이브리드 외관 변경
$("#cont1_3:checkbox").on('click', function() {
    if ($('#cont1_3').is(':checked')) {
        $("#ex ul").removeClass("on");
        $("#ex .hiv").addClass("on");
        $(".color .gray").addClass("on");
    } else {
        $("#ex ul").removeClass("on");
        $("#ex .normal").addClass("on");
        $(".color .gray").removeClass("on");
    }
});


