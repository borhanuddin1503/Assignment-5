function getNumericTextById(id){
    const innerText = parseInt(document.getElementById(id).innerText);
    return innerText;
}
function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
}

function setInnerText(id , value){
    document.getElementById(id).innerText = value
}