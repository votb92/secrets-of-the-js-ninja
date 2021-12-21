import {createResultContainer, assert, stylingResults} from "../utils/assert.js"
import {timeTest} from "../utils/performance.js"


var outerValue = "samurai";
var later;

function outerfunction () {
    var innerValue ="ninja";
    function innerFunction() {
        assert(outerValue=="samurai", "I can see the samurai");
        assert(innerValue=="ninja", "I can see the ninja");
    }
    later = innerFunction;
}
function init() {
    createResultContainer();
    outerfunction();
    later();
    stylingResults();
}

init();

