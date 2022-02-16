const images=[
    "0.png","1.jpg","2.jpg","3.jpg","4.png","5.png","6.png","7.png","8.png","9.png"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src =`img/${chosenImage}`

document.body.appendChild(bgImage)