document.addEventListener('DOMContentLoaded', function(){

    const contactBtn = document.getElementById('contact-float-btn');
    const heroSectionHeight = document.querySelector('.hero').offsetHeight;
    const contactSectionCoordinates = document.getElementById('contact').getBoundingClientRect();

    contactBtn.addEventListener('click', function(){
        window.scrollTo(0, contactSectionCoordinates.bottom);
    });

    document.addEventListener('scroll', function(){

        let triggerPosition = window.pageYOffset + window.innerHeight;

        if(triggerPosition >= heroSectionHeight + (heroSectionHeight/2) || triggerPosition <= contactSectionCoordinates.top){
            contactBtn.classList.add('visible-contact-float');
        }

        if(triggerPosition <= heroSectionHeight + (heroSectionHeight/2) || triggerPosition >= contactSectionCoordinates.top){
            contactBtn.classList.remove('visible-contact-float');
        }

    });

});