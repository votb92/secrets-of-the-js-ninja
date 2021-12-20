export function createResultContainer(){
    var container = document.createElement("article");
    var results = document.createElement("article");
    var h1 = document.createElement("h1");
    h1.textContent = "Test:";
    container.id = "result-container";
    results.id = "results";
    container.appendChild(h1);
    container.appendChild(results);
    document.querySelector('body').appendChild(container);
}

export function assert(value, desc){
    var li =  document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

export function stylingResults(){
    styleDiv();
    const passes = document.querySelectorAll(".pass")
    const fail = document.querySelectorAll(".fail")
    if (passes){
        for (var i = 0; i < passes.length; ++i) {
            passes[i].style.color = "#008000";
        }
    }
    if (fail){
        for (var i = 0; i < fail.length; ++i) {
            fail[i].style.color = "#ff0000";
        }
    }
}

function styleDiv(){
    const container = document.getElementById("result-container");
    container.style.border = "solid";
    const results = document.getElementById("results");
    results.style.margin = "15px";
}