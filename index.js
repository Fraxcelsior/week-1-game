const images = [
    {name: "bird", src: "bird.png"},
    {name: "pebble", src: "pebble.jpeg"},
    {name: "leaf", src: "leaf.jpg"}
]


function getRandomInt (max){
    return Math.floor(Math.random() * Math.floor(max));
    
}

images.forEach(image => {
    let main = document.getElementById("searchField");
    let img = document.createElement("img");
    img.alt = image.name;
    img.src = image.src;
    img.style.height = "100px";
    img.style.position = "absolute";
    img.style.bottom = `${getRandomInt(30)}rem`;
    img.style.left = `${getRandomInt(60)}rem`;
    main.appendChild(img);
    img.onclick = function () {
        addToFoundItems(image);
        console.log(foundItems);
    }

});

let foundItems = [];


function addToFoundItems(image) {
    if (!foundItems.includes(image)) {
        foundItems.push(image);
        displayInFooter();
    }
}


function displayInFooter() {
    let foundItemsSection = document.getElementById("foundItems");
    foundItemsSection.innerHTML = ``;
    foundItems.forEach(image => {
        let img = document.createElement("img");
        img.alt = image.name;
        img.src = image.src;
        img.style.height = "5rem";
        foundItemsSection.appendChild(img);
       
    });
    winAlert();
}
console.log(addToFoundItems);

function winAlert () {
if (foundItems.length === images.length) {
    alert("Congratulations! You have won the game!");
}
}


/*
console.log(images, addToFoundItems(image), foundItems)
img.onclick = addToFoundItems(image);
*/

 /*
        let foundImage = document.createElement("img");
        foundImage.src = foundItems.src;
        console.log(foundImage);
        foundItemsSection.appendChild(foundItems);
        */