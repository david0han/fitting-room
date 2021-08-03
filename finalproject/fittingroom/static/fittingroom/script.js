function toggleStyles() {
    var menuBox = document.getElementById("menu");
    var styleOPtions = document.getElementById("options");

    menuBox.classList.toggle('cover');
    styleOPtions.classList.toggle('hidden');

    // bucketBox.children[1].classList.toggle('invisible');    

    // bucketBox.classList.toggle('closed');
    // bucketBox.classList.toggle('open');
}