
$("#select_keyboard_layout").append("<option value='malayalam'>Malayalam</option>\
<option value='hindi'>Hindi</option>");

$("#select_keyboard_layout").on('click',function(){
    setKeyboardLanguage($(this).val());
});

setKeyboardLanguage('malayalam');

function setKeyboardLanguage(lang){
    if(lang === 'malayalam')
        setMalayalamLayout();
}

$(".key_btn").on('click',function(){
    // show an svg on top of this btn
    var pos = $(this).position();
    console.log(pos);

    // $("#container").position=$(this).position();
    $("#container").show();
    $("#container").offset({ top: pos.top-56, left: pos.left-60 });


})
// $("#right_panel").on('click',function(){
//     $("#container").hide();
// });



                     