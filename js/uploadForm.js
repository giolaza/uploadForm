function file_browser(file){
    var label=$(file).parent('.file-browser');
    var file_name=$(label).children('.file_name');
    var files_count=$(file_name).children('.files_count');
    var file_count=$(file)[0].files.length;
    files_count.html(file_count);
}