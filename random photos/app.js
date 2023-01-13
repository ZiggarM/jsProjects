const imgContainerEl = document.querySelector('.image-container')
const btn = document.querySelector('.btn')





btn.addEventListener('click', () => {
    imageNumber = 10
    addNewImages()
})



function addNewImages() {
    for (let i = 0; i < imageNumber; i++) {
        const newImg = document.createElement('img')
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
        imgContainerEl.appendChild(newImg)
    }
}