const ipcRenderer = require('electron').ipcRenderer;

  
  

$(".left_menu_item").on('click',function(evt){
    ipcRenderer.send('change-page', $(this).attr('menu-name'));
})