

function copy(str) {
    var sandbox = $('#sandbox').val(str).select();
    document.execCommand('copy');
    sandbox.val('');
}

function paste() {
    var result = '',
        sandbox = $('#sandbox').val('').select();
    if (document.execCommand('paste')) {
        result = sandbox.val();
    }
    sandbox.val('');
    return result;
}



var theFrame = document.getElementsByTagName("iframe")[1].src;

/*var theFrameDocument = theFrame.contentDocument || theFrame.contentWindow.document;
var url = theFrameDocument.getElementsByTagName("video")[0].src;

console.log(url);*/

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
       }
    };
    xhttp.open("GET", theFrame, true);
    xhttp.send(); 

$('#dashboard_video_iframe').append("<button id=\"copy-link\"></button>") ;
$("#copy-link").click(function(){
    document.execCommand('copy');
});