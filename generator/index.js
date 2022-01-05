import {createResultContainer, assert, stylingResults} from "../utils/assert.js"
import {defer} from "../utils/defer.js"
import {timeTest} from "../utils/performance.js"

function *IdGenerator(){
    let id = 0;
    while(true){
        yield ++id;
    }
}

function* WeaponGenerator(){
    yield "Katana";
    yield "Wakizashi";
    yield "Kusarigama";
    // how to chain to another generator
    yield* GunGenerator();
}

function* GunGenerator(){
    yield "Shortgun";
    yield "AK-47";
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
    defer(() => {console.log("first action")});
    defer(() => {console.log("second action")});
    consumeGenerator(WeaponGenerator);
    consumeGeneratorUsingWhile(WeaponGenerator);

    // id generator
    const idIterator = IdGenerator();
    const ninja1 = {id: idIterator.next().value};
    const ninja2 = {id: idIterator.next().value};
    const ninja3 = {id: idIterator.next().value};

    assert(ninja1.id === 1, "1st ninja has id of 1");
    assert(ninja2.id === 2, "2nd ninja has id of 2");
    assert(ninja3.id === 3, "3rd ninja has id of 3");
}

init();

