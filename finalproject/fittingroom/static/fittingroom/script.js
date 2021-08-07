function toggleStyles() {
    var menuBox = document.getElementById("menu");
    var styleOPtions = document.getElementById("options");

    menuBox.classList.toggle('cover');
    styleOPtions.classList.toggle('hidden');
}

function selectColorPalette(paletteName) {
    var palette = document.getElementById(paletteName);
    // palette.style.backgroundColor = "#CCAE9A";
    onePaletteOnly(paletteName);
    palette.classList.add('palette-selected');
}

function onePaletteOnly(name) {
    var allColorThemes = document.querySelector(".palette-holder");
    for (var i = 0; i < allColorThemes.children.length; i++) {
        var currColorTheme = allColorThemes.children[i];
        // if (currColorTheme.classList.contains('palette-selected') && (name !== currColorTheme.id)) {
            currColorTheme.classList.remove('palette-selected');
        // }
    }
}

function getSelectedThemes() {
    var checklist = document.querySelector(".checklist-holder");
    var pageTitle = [];
    var j = 0;
    for (var i = 0; i < checklist.children.length; i++) {
        var currTheme = checklist.children[i];
        if (currTheme.children[1].checked) {
            var selectedStyleName = currTheme.children[0].innerHTML;
            // pageTitle += selectedStyleName;
            pageTitle[j] = selectedStyleName;
            j++;
        }
    }
    return pageTitle;
}

function getSelectedPalette() {
    var palettes = document.querySelector(".palette-holder");
    var pagePalette = "";
    for (var i = 0; i < palettes.children.length; i++) {
        var currPalette = palettes.children[i];
        if (currPalette.classList.contains('palette-selected')) {
            pagePalette += currPalette.id;
        }
    }
    return pagePalette;
}

function sendSelected() {
    var url = window.location.origin + toggleRedirect();

    var themes = getSelectedThemes();
   
    url += "?&";
    for (var i = 0; i < themes.length; i++) {
        url += "themes=" + themes[i] + "&";
    }

    url += "colors=" + getSelectedPalette();

    window.location.replace(url);
}

// call sendSelect inside of redirect

function writingTitle() {
    var stylesAndColor = new URLSearchParams(window.location.href);

    // var title = getSelectedThemes();
    var titles = stylesAndColor.getAll('themes');
    var titleString = ""

    for (var i = 0; i <titles.length; i++) {
        titleString += String(titles[i]) + " ";
    }

    var div = document.getElementById("title-holder");
    var h3 = document.createElement("h3");
    var text = document.createTextNode(titleString)

    div.appendChild(h3);
    // h3.appendChild(title);
    h3.appendChild(text);

    h3.classList.toggle("style-name");
}

function toggleRedirect() {
    var tog = document.getElementById('toggleButton');
    var urlFirstHalf = "/fittingroom/";

    // custom if true
    if (tog.children[0].checked) { 
        urlFirstHalf += "select-custom";
    } else {
        // pre-made if true
        urlFirstHalf += "select-pre";
    }
    return urlFirstHalf;
}
