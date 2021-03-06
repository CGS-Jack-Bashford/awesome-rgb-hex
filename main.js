exports.rgbToHex = function(r, g, b, a = null){
    let i = intToHex(r)
    let j = intToHex(g);
    let k = intToHex(b);
    let l = a !== null? intToHex(Math.round(a*255)): ''
  

    return `#${l.toLowerCase()}${i}${j}${k}`;
}

function intToHex(num){
    return num.toString(16);
}

exports.hexToRgb = function(hex){
    // #FFFFFF
    if(hex[0] === '#'){
        hex = hex.substring(1);
    }

    let r = hexToInt(hex.substring(0,2));
    let g = hexToInt(hex.substring(2,4));
    let b = hexToInt(hex.substring(4,6));

    return `${r},${g},${b}`;
}

function hexToInt(hex){
    return parseInt(hex.toString(), 16);
}