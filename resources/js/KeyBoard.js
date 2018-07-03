
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
    
});



                     