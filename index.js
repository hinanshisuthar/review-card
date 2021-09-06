const details = [{
        id: 1,
        name: "Tucker",
        breed: "Golden Retriever",
        img: "images/img-1-modified.png",
        quality: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi sit, enim obcaecati animi quisquam",
    },
    {
        id: 2,
        name: "Indie",
        breed: "Indian Street",
        img: "images/img-2-modified.png",
        quality: "consectetur Lorem ipsum dolor sit amet  adipisicing elit. Ab excepturi sit, enim obcaecati animi quisquam",
    },
    {
        id: 3,
        name: "loki",
        breed: "Husky",
        img: "images/img-3-modified.png",
        quality: "obcaecati animi quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi sit, enim ",
    },
]

//referencing

var profileImg = document.querySelector("#img")

var nameText = document.querySelector("#name")

var qualities = document.querySelector("#quality")

var breedName = document.querySelector("#breed")

var nextBtn = document.querySelector("#next-btn")

var prevBtn = document.querySelector("#prev-btn")

var randomBtn = document.querySelector("#random-btn")


let currentItem = 0;

//load initial card

window.addEventListener("DOMContentLoaded", function () {
    // console.log("hello")
    // const item = details[currentItem]

    // profileImg.src = item.img;

    // nameText.textContent = item.name

    // breedName.textContent = item.breed

    // qualities.textContent = item.quality
    showCard()
})

//show card based on item

function showCard() {
    const item = details[currentItem]

    profileImg.src = item.img;

    nameText.textContent = item.name

    breedName.textContent = item.breed

    qualities.textContent = item.quality
}

//show next card

nextBtn.addEventListener("click", function () {
    // console.log("next")
    currentItem++
    if (currentItem > details.length - 1) {
        currentItem = 0;
    }
    showCard()
})

//show prev card

prevBtn.addEventListener("click", function () {
    // console.log("prev")
    currentItem--;
    if (currentItem < 0) {
        currentItem = details.length - 1;
    }
    showCard()
})

//show random card

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * details.length)
    showCard()
})