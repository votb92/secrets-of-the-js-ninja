import {defer} from "../utils/defer.js"
import {createResultContainer, report, assert, stylingResults, pass, fail} from "../utils/assert.js"
import {timeTest} from "../utils/performance.js"

const mayNeedHighLights = document.querySelectorAll(".may-need-highlight");
const arrayOfText = document.querySelectorAll(".text");



const KEYWORDS = [
    "There", "understand", "goodbye", "geographer", "baobabs"
]

const handleHighlightArray = (array, keywordArray) => {
    array.forEach(item => {
        var text = item.innerHTML;
        keywordArray.forEach(keyword => {
            text = highlightText(text, keyword);
        })
        item.innerHTML = text;
    })
}

const highlightText = (text,keyword) =>{
    var result = text.replaceAll(`${keyword}`, `<mark>${keyword}</mark>`);
    return result;
}

function init() {
    handleHighlightArray(arrayOfText,KEYWORDS);
}

init();












const handleHighLighting = () => {
    mayNeedHighLights.forEach(element => {
        var newText = processText(element.innerHTML);
        element.innerHTML= newText;
    })
}


const processText = (text) =>{
    var result = text.replaceAll("with amendments", `<mark>with amendments</mark>`);
    return result;
}