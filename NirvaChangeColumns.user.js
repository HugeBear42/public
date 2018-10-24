var object = document.getElementsByTagName("tbody")[0].getElementsByTagName("a");

var i;
for (i = 0; i < object.length; i++) {
    if (object[i].getElementsByTagName("img").length == 0) {
        if(object[i].hasAttribute("title")) {
            object[i].innerHTML = object[i].title;
        }
    }
}
