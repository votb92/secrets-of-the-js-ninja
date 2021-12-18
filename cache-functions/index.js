import {createResultContainer, assert, stylingResults} from "../utils/assert.js"
var store ={
    nextId: 1,
    cache: {},
    add: function(fn) {
        if(!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
};

function init() {
    createResultContainer();
    function ninja(){}
    assert(store.add(ninja), "Function was safely added.");
    assert(!store.add(ninja), "But it was added once!");
    stylingResults();
}

init();

