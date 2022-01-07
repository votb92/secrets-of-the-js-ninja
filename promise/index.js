import {defer} from "../utils/defer.js"
import {createResultContainer, report, assert, stylingResults} from "../utils/assert.js"
import {timeTest} from "../utils/performance.js"

const ninjaPromise = new Promise((resolve, reject) => {
    resolve("Hattori");
    // reject("An error has occured!");
})

function init() {
    createResultContainer();
    defer(stylingResults);
    // ninjaPromise.then(
    //     ninja=> {
    //         assert(ninja === "Hattori", "We were promised Hattori");
    //     }, 
    //     err => {
    //         fail("There shouldn't be an error")
    //     }
    // )
    report("At code start");
    var ninjaDelayedPromise = new Promise((resolve, reject) => {
        report("ninjaDelayedPromise executor");

        setTimeout(() => {
            report("Resolving ninjaDelayedPromise");
            resolve("Hattori");
        }, 2500);
    });

    assert(ninjaDelayedPromise !== null, "After creating ninjaDelayedPromise")

    ninjaDelayedPromise.then(ninja => {
        assert(ninja === "Hattori", "ninjaDelayedPromise resolved handled with Hattori")
    })

    const ninjaImmediatePromise = new Promise ((resolve, reject) => {
        report("ninjaImmediatePromise executor. Immediate resolve");
        resolve("Yoshi");
    });

    ninjaImmediatePromise.then(ninja => {
        assert(ninja === "Yoshi", "ninjaImmediatePromise resolved handled with Yoshi")
    });
    
    report("At code end");
}

init();

