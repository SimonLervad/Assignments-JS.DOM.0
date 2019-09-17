'use strict';
/*
 * davis.js
 */
let empty = function (target) {
    let foo = target;
    // Removing all children from an element
    while (foo.firstChild) {
        foo.removeChild(foo.firstChild);
    }
}

let fillLeft = function (target) {
    let art = target;

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("paragraph that shows up to the left"); // create text
    par.appendChild(txt); // put onto tree

    art.appendChild(h1);
    art.appendChild(par);
}
let fillCenter = function (target) {
    let artTwo = target;
    document.getElementById("center").style.color = "yellow";

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Never'); // create text
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("This paragraph plays around in the center"); // create text
    par.appendChild(txt); // put onto tree

    artTwo.appendChild(h1);
    artTwo.appendChild(par);
}

let fillRight = function (target) {
    let artThree = target;

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Eventually'); // create text
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("this paragraph is messing around in the right corner"); // create text
    par.appendChild(txt); // put onto tree

    artThree.appendChild(h1);
    artThree.appendChild(par);
}

let t1 = function (ev) {
    let target = ev.target || ev.srcElement;
    let id = target.id;
    // alert(id);
    let elm = $(id);
    if (target.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'left': fillLeft(elm); break;
        }
    }
}

let t2 = function (ev) {
    let target = ev.target || ev.srcElement;
    let id = target.id;
    // alert(id);
    let elm = $(id);
    if (target.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'center': fillCenter(elm); break;
        }
    }
}

let t3 = function (ev) {
    let target = ev.target || ev.srcElement;
    let id = target.id;
    // alert(id);
    let elm = $(id);
    if (target.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'right': fillRight(elm); break;
        }
    }
}
let initialize = function () {
    let left = $('left');
    fillLeft(left);
    left.addEventListener('click', t1, false);
    let center = $('center');
    fillCenter(center);
    center.addEventListener('click', t2, false);
    let right = $('right');
    fillRight(right);
    right.addEventListener('click', t3, false);
}
window.addEventListener('load', initialize);