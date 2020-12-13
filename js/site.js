function changeContent(src) {
    var urlContent = src;
    document.getElementById('frameContent').src = urlContent;
    console.log(urlContent);
}
console.log('A')

function myFunction(x) {
    x.classList.toggle("change");
}