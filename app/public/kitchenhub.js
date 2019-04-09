// map

let page = document.getElementById("page");
let map = document.createElement("div");
map.setAttribute("id", "map");
page.appendChild(map);


for (let index = 0; index < 16; index++) {

    var slots = document.createElement("div");
    slots.setAttribute("class", "slots");
    slots.style.width = 100 / 4 + "%";
    slots.style.height = 100 / 4 + "%";
    slots.appendChild(document.createElement("p"));
    slots.lastElementChild.textContent = "Square " + (index + 1);
    map.appendChild(slots);

}
// get values from form
let submitBtn = document.getElementById("submit-btn").onclick = function(event){
    event.preventDefault();

    var kName = document.getElementById('kname').value.trim();
    var kType = document.getElementById('ktype').value.trim();
    var kWeb = document.getElementById('kweb').value.trim();
    var kTel = document.getElementById('ktel').value.trim();
    var kDesc = document.getElementById('description').value.trim();
    
    console.log(kName);
    console.log(kType);
    console.log(kWeb);
    console.log(kTel);
    console.log(kDesc);
};

