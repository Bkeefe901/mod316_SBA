// Array of all named colors in css
const Arr = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkGrey", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
    "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "Grey", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightGrey", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
    "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
]
let colorArr = [];

// Convert all css colors in array to lowercase
for (color of Arr) {
    let lowColor = color.toLowerCase();
    colorArr.push(lowColor);

}
// create a variable for the the div 'mainContainer';
const mainEl = document.getElementById('mainContainer');



// create variable for the color input in the form
const colorInputEl = document.getElementById('colorInput');
//console.log(colorInputEl);


// create variable for the form
const formEl = document.querySelector('form');
//console.log(formEl);

// create variable for the ul with id="colorList"
const colorListEl = document.getElementById('colorList');

// Add event listener to the form tag when a submit event occurs
formEl.addEventListener('submit', colorMatch);

// The function for it will test the color entered in the input matches a dictionary of colors used in html. if so it will create a new list element with the colorname and a check box.
function colorMatch(e) {
    e.preventDefault();
    //alert ('submit event occured');
    const colorValCheck = validateColor(); // validate color is a helper function at the bottom of the page
    if (!colorValCheck) {
        alert('Color does not exist on this page');
        return;
    }
    let colorVal = colorInputEl.value.toUpperCase(); // converts the user inputed color to upper case and saves in variable colorVal
    const listEl = document.createElement('li'); // creates a new <li> 
    listEl.innerHTML = `<input type="checkbox" id="${colorVal}"><label for="${colorVal}">${colorVal.toUpperCase()}</label><br>`; // inside the new li adds input (checkbox) with id = colorVal and label 



    // before adding it to ul we will iterate over the li labels to make sure that color doesnt already exist in the list
    const colorsList = document.querySelectorAll('label');
    if (colorsList.length != 0) { // checks if there are any previously created colors, if not:
        for (color of colorsList) { // iterates through css colorList to check if the new label id is in there.
            //console.log(color.textContent);
            if (color.textContent == colorVal) { // if it does..
                alert('color has already been added'); // alert the user
                colorInputEl.value = ''; // clear the input
                return; // return nothing
            } else {
                colorListEl.appendChild(listEl); // if it does not append the li to the ul
            }
        }
    } else { // If there were no previously entered colors:
        colorListEl.appendChild(listEl); // it appends it to ul

    }



    colorInputEl.value = ''; // clears the input








}
// Create event listern for the ul 
// when a checkbox is checked in a li it cyles the color from that label in the background of the body

let checkedColors = colorListEl.getElementsByTagName('input');
const body = mainEl.parentNode;


console.log(checkedColors);

colorListEl.addEventListener('change', colorChanger); // event listener for checking checkboxes.
let colorCycleArr = []; // initializes array for checked colors


function colorChanger(e) { 
    let colorIndex = 0; // intitialize variable 
    let index;
    const colorId = e.target.getAttribute("id"); // caches the id of the e.target's id attribute (the color)
    if (e.target.checked) { // if the target of the event is 'checked'
        colorCycleArr.push(colorId); // pushes colorId to the array for colors
        //alert(`${colorId} has been checked`);
        //alert(colorCycleArr);
    } else if (!e.target.checked) { // if e.target was 'unchecked':
        index = colorCycleArr.indexOf(colorId); // set index variable to the index of the color id in the color array
        colorCycleArr.splice(index, 1); // remove that index in the array (remove that color from the array)
        //alert(colorCycleArr); 

    }




    
    if(colorCycleArr.length == 0){ // if the color array is empty:
        body.style.backgroundColor = 'White'; // set the background to white
    } else{ // otherwise:
        setInterval(() => { // interval function to cycle through the color array
            colorIndex = (colorIndex + 1) % colorCycleArr.length; // makes sure that color index continually cycles through different indexes that are available within the color array
            body.style.backgroundColor = colorCycleArr[colorIndex]; // set the background color of the body to the color at that index
            
        }, 2000); // change it every 2 seconds

    }

    

    
    

    
 

}










// helper functions:

// validateColor function to check that the color entered is within the array of possible html colors;
function validateColor() {
    let colorVal = colorInputEl.value.toLowerCase();
    if (colorArr.includes(colorVal)) {
        return true;
    }
    else return false;

};
