function toggleStyles() {
    var menuBox = document.getElementById("menu");
    var styleOPtions = document.getElementById("options");
    var submit = document.getElementById("button-submit");

    menuBox.classList.toggle('cover');
    styleOPtions.classList.toggle('hidden');
    submit.classList.toggle('hidden');
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
    for (var i = 1; i < checklist.children.length; i++) {
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
    for (var i = 1; i < palettes.children.length; i++) {
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

function clothesFilter() {
    var Path, foundFiles, aFile, Path, attr, i, e, dyear;
    var DateVal, Handle, FileDate, ReadOnlyFile;
    var themesAndcolor = new URLSearchParams(window.location.href);
    var themes = themesAndcolor.getAll('themes');
    var color = themesAndcolor.get('colors');
    var types = ['hat', 'top', 'bottom', 'accessory', 'shoes']
    for (var i = 0; i < themes.length; i++) {
      for (var j = 0; j == 5; j++) {
      Path = "/static/fittingroom/images" + themes[i] + color + types[j]; //Folder where we will search for files
      foundFiles = aqFileSystem.FindFiles(Path, "*.txt");
      if (!strictEqual(foundFiles, null))
      while (foundFiles.HasNext()) {
          clothingItem = foundFiles.Next();
          var Tab = document.getElementById(types[j] + 'Tab');
          var imgElement = document.createElement('img');
          imgElement.src = clothingItem;
          hatTab.appendChild(imgElement);
        }
      }
      }
}

function preSelectClothesSrc(outfitDiv) {
    var url = window.location.origin + '/fittingroom/clothing-details?' + 
    window.location.href.slice(window.location.origin.length + 26);
    var startString = 'http://localhost:8000/static/images/'

    var outfit = document.getElementById(outfitDiv);

    var hat = outfit.children[0].children[0].src.slice(startString.length);
    var top = outfit.children[1].children[0].src.slice(startString.length);
    var bottom = outfit.children[2].children[0].src.slice(startString.length);
    var accessory = outfit.children[3].children[0].src.slice(startString.length);
    var shoes = outfit.children[4].children[0].src.slice(startString.length);



    // var hat_sliced = hat.slice(startString.length);
    // var top_sliced = top.slice(startString.length);
    // var bottom_sliced = bottom.slice(startString.length);
    // var accessory_sliced = accessory.slice(startString.length);
    // var shoes_sliced = shoes.slice(startString.length);
    
    
    var url_with_info = url + '&hat=' + hat + '&top=' + top + '&bottom=' + bottom + '&accessory=' + accessory + '&shoes=' + shoes;
    // var url_with_info = url + '?&hat=' + hat_sliced + '&top=' + top_sliced + '&bottom=' + bottom_sliced + '&accessory=' + accessory_sliced + '&shoes=' + shoes_sliced;
    window.location.replace(url_with_info);
   }