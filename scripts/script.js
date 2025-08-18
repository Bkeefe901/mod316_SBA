// Array of all named colors in css
const Arr = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkGrey", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
    "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "Grey", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightGrey", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
    "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
]
let colorArr = [];

for (color of Arr) {
    let lowColor = color.toLowerCase();
    colorArr.push(lowColor);

}
// // cache the input with id='inputColor' into a variable called inputColorEl
// const inputColorEl = document.getElementById('inputColor');
// // // Create event listener to input for color (inputColorEl)
// // inputColorEl.addEventListener('click', colorInput
// //     // If color doesnt match color in color dictionary send an alert


// // Create event listener to button
// inputColorEl.addEventListener()
//     // When clicked it will create a li (and a checkbox-input and a label inside) and appends it to ul with the input submitted as the textContent of the li>label



// create variable for the color input in the form
const colorInputEl = document.getElementById('colorInput');
console.log(colorInputEl);
// create variable for the form
const formEl = document.querySelector('form');
console.log(formEl);
// create variable for the ul with id="colorList"
const colorListEl = document.getElementById('colorList');
// Add event listener to the form tag when a submit event occurs
formEl.addEventListener('submit', colorMatch);
// The function for it will test the color entered in the input matches a dictionary of colors used in html. if so it will create a new list element with the colorname and a check box.
function colorMatch(e) {
    e.preventDefault();
    //alert ('submit event occured');
    const colorValCheck = validateColor();
    if (!colorValCheck) {
        alert('Color does not exist on this page');
        return;
    }
    let colorVal = colorInputEl.value.toUpperCase();
    const listEl = document.createElement('li');
    listEl.innerHTML = `<input type="checkbox" id="${colorVal}"><label for="${colorVal}">${colorVal.toUpperCase()}</label><br>`;



    // before adding it to ul we will iterate over the li labels to make sure that color doesnt already exist in the list
    const colorsList = document.querySelectorAll('label');
    if (colorsList.length != 0) {
        for (color of colorsList) {
            console.log(color.textContent);
            if (color.textContent == colorVal) {
                alert('color has already been added');
                colorInputEl.value = '';
                return;
            } else {
                colorListEl.appendChild(listEl);
            }
        }
    } else {
        colorListEl.appendChild(listEl);

    }



    colorInputEl.value = '';


    // Iterate through all inputs that are children of the <li>'s if checked = 'true' set the background-color of the body equal to the id attribute of that input. Use setInterval to set time to cycle through the different colors.


    



}
// Create event listern for the ul 
// when a checkbox is checked in a li it cyles the color from that label in the background of the body
// let checkedColors = colorListEl.getElementsByTagName('input');
// const body = document.getElementById('bigBody');

// console.log(colorListEl);

//checkedColors.addEventListener('change', colorChanger);

let checkedColors = colorListEl.getElementsByTagName('input');
const body = document.getElementById('bigBody');

console.log(checkedColors);

colorListEl.addEventListener('change', colorChanger);

function colorChanger(e) {
    const colorId = e.target.getAttribute("id");
    if(e.target.checked){
    alert(`${colorId} has been checked`);
    }




}


// function colorChanger(e) {
//     console.log(e.target);
//     // if(e.checked){
//     //     alert('box is checked');
//     // }




// }

// for (selected of checkedColors) {
//         if (!selected.checked) {
//             continue;
//         } else {
//             body.style.backgroundColor = selected.getAttribute('id');

//         }
//     }




// helper functions:
// validateColor function to check that the color entered is within the array of possible html colors;
function validateColor() {
    let colorVal = colorInputEl.value.toLowerCase();
    if (colorArr.includes(colorVal)) {
        return true;
    }
    else return false;

};
