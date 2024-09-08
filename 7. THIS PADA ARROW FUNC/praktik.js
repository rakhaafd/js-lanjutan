const box = document.querySelector('.box')
box.addEventListener('click', function(){
    this.classList.toggle('size')
    setTimeout(() => {
        this.classList.toggle('caption')
    }, 1000)
})