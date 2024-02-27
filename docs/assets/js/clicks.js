const whatsnew = "/whatsnew"

function linkOpener(link){
    window.open(link, "_parent")
}

function handleElementClick(event) {
    event.stopPropagation();
    
    var element = event.target;

    if (!element.id && element.parentNode) {
        element = element.parentNode;
    }
    var id = element.id;
    if (id === 'whatsnew') {
        linkOpener(whatsnew);
    }
}

var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', handleElementClick);
}