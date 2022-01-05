import {createResultContainer, assert, stylingResults} from "../utils/assert.js"
import {defer} from "../utils/defer.js"
import {timeTest} from "../utils/performance.js"

function* WeaponGenerator(){
    yield "Katana";
    yield "Wakizashi";
    yield "Kusarigama";
}

function init() {
    createResultContainer();
    defer(stylingResults);
    defer(() => {console.log("first action")});
    defer(() => {console.log("second action")});
    for(let weapon of WeaponGenerator()){
        assert(weapon !== undefined, weapon);
    }
}

init();

