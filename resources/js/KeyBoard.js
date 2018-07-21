
$("#select_keyboard_layout").append("<option value='malayalam'>Malayalam</option>\
");
{/* <option value='hindi'>Hindi</option> */}
$("#select_keyboard_layout").on('click', function () {
    setKeyboardLanguage($(this).val());
});

setKeyboardLanguage('malayalam');

var keyboard_mappings;
function setKeyboardLanguage(lang) {
    if (lang === 'malayalam')
        keyboard_mappings = setMalayalamLayout();
}

$(".key_btn").on('click', function () {
    // show an svg on top of this btn
    var pos = $(this).position();
    var key = $(this).text();
    if(keyboard_mappings[key] && keyboard_mappings[key]["secondary_keys_enabled"]){
        var secondary_keys = keyboard_mappings[key]["secondary_keys"] != undefined?keyboard_mappings[key]["secondary_keys"]:["്", "ാ", "ി", "ീ", "ു", "ൂ", "െ", "േ", "ൈ", "ൗ"];
        var custom_secondary = keyboard_mappings[key]["secondary_keys"] != undefined;
        for(let i=0;i<10;i++)
            if(custom_secondary)
                $("#slice-"+(i+1)+" text").text(secondary_keys[i]);
            else
                $("#slice-"+(i+1)+" text").text(key+secondary_keys[i]);
        $("#slice-circle text").text(key);
        

        // $("#container").position=$(this).position();
        $("#container").show();
        $("#container").offset({ top: pos.top - 56, left: pos.left - 60 });
    
    }else{
        $("#text_editor").val($("#text_editor").val()+key);
    }
    

})

$(".slice").on('click', function () {
    var key_value = ($($(this).children()[1]).text());
    $("#text_editor").val($("#text_editor").val()+key_value);
})

$(".slice-circle").on('click', function () {
    $("#container").hide()
})
// hide   the secondary keys
// $("#slice-10").on('click', function () {
//     $("#container").hide();
// })

$("#container").on('mouseleave',function(){
    $("#container").hide()
})

// $("#right_panel").on('click',function(){
//     $("#container").hide();
// });



