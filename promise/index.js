import {defer} from "../utils/defer.js"
import {createResultContainer, report, assert, stylingResults} from "../utils/assert.js"
import {timeTest} from "../utils/performance.js"
import {clock} from "../utils/time.js"

const ninjaPromise = new Promise((resolve, reject) => {
    resolve("Hattori");
    // reject("An error has occured!");
})

function getJSON(url){
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        
        request.open("GET", url);

        request.onload = function() {
            try {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                } else {
                    reject(this.status + " " + this.statusText);
                }
            } catch (e) {
                reject(e.message);
            }
        };

        request.onerror = function() {

        }

        request.send();
    });
}

function init() {
    clock();
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

function secondInit() {
    var test2 = "test2";
    createResultContainer(test2);
    getJSON("../data/response.json").then(content => {
        assert(content !== null, "content obtained!", test2);
        report(JSON.stringify(content),test2);
        stylingResults();
    }).catch(e => fail("Shouldn't ne here: " + e));
}

init();
secondInit();
