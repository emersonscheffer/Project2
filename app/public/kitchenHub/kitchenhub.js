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

    slots.setAttribute("onmouseenter", "hovering(event)");
    slots.setAttribute("onmouseleave", "hoverout(event)");
    slots.setAttribute("onclick", "selecting(event)");
    slots.setAttribute("data-selected", false);
    slots.setAttribute("data-isselectable", true);


    slots.lastElementChild.textContent = "Square " + (index + 1);
    map.appendChild(slots);

}
// get values from form
let submitBtn = document.getElementById("submit-btn").onclick = function (event) {
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

function hovering(event) {
    if (event.target.dataset.selected === "true") {
        ;
    } else {
        event.target.style.border = "solid 3px rgb(120 120 255)";
    }

}

function hoverout(event) {
    event.target.style.border = "solid 3px #ffe18f";
}

function selecting(event) {

    var allselected = document.querySelectorAll(".slots");

    if (event.target.dataset.selected === "true") {
        //if (event.target.dataset.isselectable === "false") {
            event.target.style.backgroundColor = "#929292";
            event.target.dataset.selected = false;
            //event.target.dataset.isselectable = false;

            allselected.forEach(function (item) {
                item.dataset.selected = false;
                item.dataset.isselectable = true;
            });

        //}
    } else if (event.target.dataset.selected === "false") {
        if (event.target.dataset.isselectable === "true") {
            event.target.style.backgroundColor = "#cacaca";
            event.target.dataset.selected = true;

            allselected.forEach(function (item) {
                item.dataset.selected = true;
                item.dataset.isselectable = false;
            });

            event.target.dataset.isselectable = true;
        }

    }








    // var highlightedItems = userList.querySelectorAll(".highlighted");

    // highlightedItems.forEach(function (userItem) {
    //     deleteUser(userItem);
    // });

}