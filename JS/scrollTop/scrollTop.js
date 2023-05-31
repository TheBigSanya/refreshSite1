const btnScrollTop = document.querySelector('.btn-scroll-top');

btnScrollTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});