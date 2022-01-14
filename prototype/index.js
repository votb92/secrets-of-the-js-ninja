import {defer} from "../utils/defer.js"
import {createResultContainer, report, assert, stylingResults, pass, fail} from "../utils/assert.js"
import {timeTest} from "../utils/performance.js"

function Ninja(){
}
// prototype is shared with all the instances of this class
Ninja.prototype.swingSword = function () {
    return true;
}

function Person() {}
Person.prototype.dance = function(){};


function Dancer() {}
Dancer.prototype ={
    dance: Person.prototype.dance
};

function init() {
    createResultContainer();
    defer(stylingResults);
    const ninja1 = Ninja();
    assert(ninja1 === undefined, "No instance of Ninja created.");

    const ninja2 = new Ninja();
    assert(ninja2 && 
        ninja2.swingSword &&
        ninja2.swingSword(), 
        "Instance exists and method is callable."
        );
    assert(typeof ninja2 === "object", "The type of ninja2 is object.");
    assert(ninja2 instanceof Ninja, "instanceof identifies the constructer");
    assert(ninja2.constructor = Ninja, "The ninja2 object was created by the Ninja function");
}

init();

