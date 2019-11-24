console.log('Running 3MD.js');

function main(){ 
const app = document.querySelector('#container');

function addElement(parent, id, tag = 'div', content = null, classList = null) {
    const elem = document.createElement(tag);
    elem.id = id;
    if (content) elem.innerText = content;
    if (classList) elem.classList.add(...classList);
    parent.appendChild(elem);
    return elem;
}

function addElemObj(parent, obj) {
    const elem = document.createElement(obj.tag);
    elem.id = obj.id;
    elem.innerText = obj.innerText;
    parent.appendChild(elem);
    return elem;
}


   for (let i = 1; i < 100; i++) {
    const miniDiv = addElement(app, "mini" + i, "div", "My text " + i);
    if(i%3===0) {
        elem.classList.add("fizz");
    } else if (i%5===0){
        elem.classList.add("buzz");
    } else if (i%3===0 && i%5===0) {
        elem.classList.add("fizzbuzz");
    } else {
        elem.classList.add("regular");
    }

    addElemObj(miniDiv, { id: "ob" + i, tag: "div", innerText: "Text" + i }) 
}
}