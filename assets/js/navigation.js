document.addEventListener('DOMContentLoaded', function(){

    const header = document.querySelector('header');
    const headerCoordinates = header.getBoundingClientRect();
    const sticky = headerCoordinates.top;

    window.addEventListener('scroll', function(){
        stickyHeader();
    })

    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky-header");
        } else {
            header.classList.remove("sticky-header");
        }
    }

});