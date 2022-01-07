import {defer} from "../utils/defer.js"
import {createResultContainer, report, assert, stylingResults} from "../utils/assert.js"
import {timeTest} from "../utils/performance.js"

function init() {
    createResultContainer();
    defer(stylingResults);
    
}

init();

