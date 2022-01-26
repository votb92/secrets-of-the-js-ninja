import {defer} from "../utils/defer.js"
import {createResultContainer, report, assert, stylingResults, pass, fail} from "../utils/assert.js"
import {timeTest} from "../utils/performance.js"

"use strict"
class Person {
    constructor(name){
    this.name = name;
    }

    dance(){
        return true;
    }
}

class Ninja extends Person {
    constructor(name, weapon, level=0){
    super(name); //Uncomment this line of code when super gets supported.
        this.weapon = weapon;
        this.level = level;
    }

    wieldWeapon(){
        return true;
    }

    static compare(ninja1, ninja2){
        return ninja1.level - ninja2.level;
    }
}

function init() {
    createResultContainer();
    defer(stylingResults);
    const person = new Person("Bob");

    assert(person instanceof Person, "A person’s a person");
    assert(person.dance(), "A person can dance.");
    assert(person.name === "Bob", "We can call it by name.");
    assert(!(person instanceof Ninja), "But it’s not a Ninja");
    assert(typeof person.wieldWeapon === "undefined", "And it cannot wield a weapon");

    const ninja = new Ninja("Yoshi", "Wakizashi");
    assert(ninja instanceof Ninja, "A ninja’s a ninja");
    assert(ninja.wieldWeapon(), "That can wield a weapon");
    pass(ninja.weapon);
    assert(ninja instanceof Person, "But it’s also a person");
    assert(ninja.name === "Yoshi" , "That has a name");
    assert(ninja.dance(), "And enjoys dancing");


    const ninja1 = new Ninja("Yoshi","knife", 4);
    const ninja2 = new Ninja("Hatori","gun", 3);

    assert(typeof ninja1.compare === "undefined"
        && typeof ninja2.compare === "undefined",
            "The ninja instance doesn’t know how to compare");

    assert(Ninja.compare(ninja1, ninja2) > 0,
            "The Ninja class can do the comparison!");

    assert(typeof Ninja.wieldWeapon === "undefined",
            "The Ninja class can not swing a sword");
    }

init();

