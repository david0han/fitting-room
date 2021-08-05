function toggleStyles() {
    var menuBox = document.getElementById("menu");
    var styleOPtions = document.getElementById("options");

    menuBox.classList.toggle('cover');
    styleOPtions.classList.toggle('hidden');
}

function selectColorPalette(paletteName) {
    var palette = document.getElementById(paletteName);
    // palette.style.backgroundColor = "#CCAE9A";
    onePaletteOnly();
    palette.classList.toggle('palette-selected');
}

function onePaletteOnly() {
    var allColorThemes = document.querySelector(".palette-holder");

    for (var i = 0; i < allColorThemes.length; i++) {
        var currColorTheme = allColorThemes[i];
        if (currColorTheme.classList.contains('palette-selected')) {
            currColorTheme.classList.toggle('palette-selected');
        }
    }
}