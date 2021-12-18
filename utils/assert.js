export function createResultContainer(){
    var container = document.createElement("div");
    container.id = "results";
    document.querySelector('body').appendChild(container);
}

export function assert(value, desc){
    var li =  document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

export function stylingResults(){
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