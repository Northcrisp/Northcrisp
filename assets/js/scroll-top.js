document.addEventListener('DOMContentLoaded', function(){

    const scrollBtn = document.getElementById('scroll-to-top');

    scrollBtn.addEventListener('click', function(){
        window.scrollTo(0, 0);
    });

    // Display/Hide scroll button
    document.addEventListener('scroll', function(){
        if(window.pageYOffset >= 500){
            scrollBtn.classList.add('visible-scroll-to-top');
        } else {
            scrollBtn.classList.remove('visible-scroll-to-top');
        }
    })

});