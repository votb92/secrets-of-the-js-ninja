import {createResultContainer, assert, stylingResults} from "../utils/assert.js"
import {defer} from "../utils/defer.js"
import {timeTest} from "../utils/performance.js"

function traverseDOM(element, callback){
        callback(element);
        element = element.firstElementChild;
        while(element){
                traverseDOM(element, callback);
                element = element.nextElementSibling;
        }
}

function* traverseDOMWithGenerator(element){
        yield element;
        element = element.firstElementChild;
        while(element){
                yield* traverseDOMWithGenerator(element);
                element = element.nextElementSibling;
        }
}

// how to consume a Generator using for-of
 function consumeGenerator(callbackGen){
    for(let weapon of callbackGen()){
        assert(weapon !== undefined, weapon);
    }
 }

 // how to consume a Generator using while
 function consumeGeneratorUsingWhile(callbackGen){
    const weaponGen = callbackGen();
    let item;
    while(!(item = weaponGen.next()).done){
        assert(item !== undefined, item.value);
    }
 }

function init() {
    createResultContainer();
    defer(stylingResults);
    const subTree = document.getElementById("subTree");
    traverseDOM(subTree, function(element){
            assert(element !== null, element.nodeName);
    })
    for(let element of traverseDOMWithGenerator(subTree)){
            assert(element != null, element.nodeName);
    }

}

init();