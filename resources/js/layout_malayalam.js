


function setMalayalamLayout() {
    const vowels = ["്", "ാ", "ി", "ീ", "ു", "ൂ", "െ", "േ", "ൈ", "ൗ"]

    const consonants = [["ക", "ഖ", "ഗ", "ഘ", "ങ"],
    ["ച", "ഛ", "ജ", "ഝ", "ഞ"],
    ["ട", "ഠ", "ഡ", "ഢ", "ണ"],
    ["ത", "ഥ", "ദ", "ധ", "ന"],
    ["പ", "ഫ", "ബ", "ഭ", "മ"],
    ["യ", "ര", "ല", "വ", "ശ", "ഷ", "സ", "ഹ", "ള", "ഴ", "റ"]]

    var key_mappings = {
        ".": { "secondary_keys_enabled": false },
        ",": { "secondary_keys_enabled": false },
        "!": { "secondary_keys_enabled": false },
        "?": { "secondary_keys_enabled": false },
        "-": { "secondary_keys_enabled": false },
        "\"": { "secondary_keys_enabled": false },
        "\'": { "secondary_keys_enabled": false },
        "<": { "secondary_keys_enabled": false },
        ">": { "secondary_keys_enabled": false },
        "ൃ": { "secondary_keys_enabled": false },
        "ൊ": { "secondary_keys_enabled": false },
        "ം": { "secondary_keys_enabled": false },
        "ക": { "secondary_keys_enabled": true },
        "ഖ": { "secondary_keys_enabled": true },
        "ഗ": { "secondary_keys_enabled": true },
        "ഘ": { "secondary_keys_enabled": true },
        "ങ": { "secondary_keys_enabled": true },
        "ച": { "secondary_keys_enabled": true },
        "ഛ": { "secondary_keys_enabled": true },
        "ജ": { "secondary_keys_enabled": true },
        "ഝ": { "secondary_keys_enabled": true },
        "ഞ": { "secondary_keys_enabled": true },
        "ട": { "secondary_keys_enabled": true },
        "ഠ": { "secondary_keys_enabled": true },
        "ഡ": { "secondary_keys_enabled": true },
        "ഢ": { "secondary_keys_enabled": true },
        "ണ": { "secondary_keys_enabled": true },
        "ത": { "secondary_keys_enabled": true },
        "ഥ": { "secondary_keys_enabled": true },
        "ദ": { "secondary_keys_enabled": true },
        "ധ": { "secondary_keys_enabled": true },
        "ന": { "secondary_keys_enabled": true },
        "പ": { "secondary_keys_enabled": true },
        "ഫ": { "secondary_keys_enabled": true },
        "ബ": { "secondary_keys_enabled": true },
        "ഭ": { "secondary_keys_enabled": true },
        "മ": { "secondary_keys_enabled": true },
        "യ": { "secondary_keys_enabled": true },
        "ര": { "secondary_keys_enabled": true },
        "ല": { "secondary_keys_enabled": true },
        "വ": { "secondary_keys_enabled": true },
        "ശ": { "secondary_keys_enabled": true },
        "ഷ": { "secondary_keys_enabled": true },
        "സ": { "secondary_keys_enabled": true },
        "ഹ": { "secondary_keys_enabled": true },
        "ള": { "secondary_keys_enabled": true },
        "ഴ": { "secondary_keys_enabled": true },
        "റ": { "secondary_keys_enabled": true },
        "ക്ഷ": { "secondary_keys_enabled": true },

        "അ": {
            "secondary_keys_enabled": true,
            "secondary_keys": ["ഒൗ","ആ", "ഇ", "ഈ", "ഉ", "ഊ", "ഋ", "എ", "ഐ", "ഒ"]
        },
        "ാ": {
            "secondary_keys_enabled": true,
            "secondary_keys": ["്", "ാ", "ി", "ീ", "ു", "ൂ", "െ", "േ", "ൈ", "ൗ"]
        },
        "ർ": {
            "secondary_keys_enabled": true,
            "secondary_keys": ["ൽ", "ൾ", "ം", "ഃ", "ഌ", "ൢ", "ൌ", "ൺ", "ൻ"]
        },
    }

    $(".keyboard_cell_1_1, .keyboard_cell_2_1, .keyboard_cell_3_1, .keyboard_cell_4_1, .keyboard_cell_5_1, .keyboard_cell_6_1, .keyboard_cell_7_1, .keyboard_cell_8_1").hide();
    // $(".keyboard_cell_1_1").text(".")
    // $(".keyboard_cell_2_1").text(",")
    // $(".keyboard_cell_3_1").text("!")
    // $(".keyboard_cell_4_1").text("?")
    // $(".keyboard_cell_5_1").text("-")
    // $(".keyboard_cell_6_1").text("\"")
    // $(".keyboard_cell_7_1").text("\'")

    $(".keyboard_cell_1_7").text("്ര")
    $(".keyboard_cell_2_7").text("ൃ")
    $(".keyboard_cell_3_7").text("ൊ")
    $(".keyboard_cell_4_7").text("ോ")
    $(".keyboard_cell_5_7").text("ം")
    $(".keyboard_cell_6_7").text( "ൗ")
    $(".keyboard_cell_7_7").text( "ാ")
    $(".keyboard_cell_8_7").text(" ")
    

    var elems = [["ക", "ഖ", "ഗ", "ഘ", "ങ"],
    ["ച", "ഛ", "ജ", "ഝ", "ഞ"],
    ["ട", "ഠ", "ഡ", "ഢ", "ണ"],
    ["ത", "ഥ", "ദ", "ധ", "ന"],
    ["പ", "ഫ", "ബ", "ഭ", "മ"],
    ["യ", "ര", "ല", "വ", "ശ"],
    ["ഷ", "സ", "ഹ", "ള", "ഴ"],
    ["റ", "ക്ഷ", "ർ", "അ","ഏ"]
    ];
    for (let i = 0; i < elems.length; i++)
        for (let j = 0; j < 5; j++)
            if (elems)
                $(".keyboard_cell_" + (i + 1) + "_" + (j + 2)).text(elems[i][j]);




    return key_mappings;

}