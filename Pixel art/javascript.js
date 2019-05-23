// painting 
function setPixelColour(pixel){
    pixel.style.backgroundColor = document.getElementById("color").value;
}

// adjusting the drawing board
var width = 0;
var length = 0;
function adjustTheBoard(){
    width = Number(document.getElementById("width").value);
    length = Number(document.getElementById("length").value);
    setTheGrid(width, length);
}

let newWidth = 8 // initial number of width
let newLength = 8 // initial number of length
function setTheGrid(width, length){
    let rows = document.getElementsByClassName("row")
    let art = document.getElementById("art");

    if (length > newLength){
        for (let i = 0; i<length-newLength; i++){
            art.appendChild(addDivRow())
            for (let i = 0; i<width-1; i++){
                rows[rows.length-1].appendChild(addSquare())
            }
        }
    }

    if(width > newWidth){
        for (let row of rows){
            for(let i = 0; i<width-newWidth;i++){
                row.appendChild(addSquare());
            }
        }
    }

    if(length < newLength){
        for (let i = 0; i < newLength-length; i++){
            art.removeChild(art.firstElementChild)
        } 
    }

    if (width < newWidth){
        for (let i = 0; i < newWidth-width; i++){
            for(let row of rows){
                row.removeChild(row.firstElementChild)
            }
        } 
    }
    newWidth = width;
    newLength = length;
    console.log(newLength, newWidth)
}

function addDivRow (){
    return createElement("div", "class", "row")
}

function addSquare(){
    let square = createElement("div", "class", "pixel");
    let arr_on = document.createAttribute("onclick");
    arr_on.value = "setPixelColour(this)";
    square.setAttributeNode(arr_on);
    return square;
}


function createElement(ele, att, att_val) {
    let elementName = document.createElement(String(ele));
    let arr_class = document.createAttribute(String(att));
    arr_class.value = String(att_val);
    elementName.setAttributeNode(arr_class);
    return elementName
}

// task to do
// fixing the square drawing board 
// adding the color palat 

