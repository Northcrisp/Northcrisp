// Check if dark mode is ON
if(localStorage.getItem('dark-mode')){
    document.documentElement.setAttribute('data-theme', 'dark');
}

document.addEventListener('DOMContentLoaded', function(){

    document.addEventListener('click', function(event){

        if(event.target.hasAttribute('data-dark-mode') || event.target.closest('[data-dark-mode]')){
            darkModeToggle();
        }

    });

});

function darkModeToggle(){

    if(document.documentElement.getAttribute('data-theme') === 'dark'){
        localStorage.removeItem('dark-mode');
        document.documentElement.removeAttribute('data-theme');
    } else {
        localStorage.setItem('dark-mode', 'active');
        document.documentElement.setAttribute('data-theme', 'dark');
    }

}