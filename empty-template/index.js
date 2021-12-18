import {createResultContainer, assert, stylingResults} from "../utils/assert.js"
import {timeTest} from "../utils/performance.js"

function init() {
    createResultContainer();

    stylingResults();
}

init();

