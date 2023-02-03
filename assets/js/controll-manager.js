/**
* **************************************************************
* Controll Manager
* **************************************************************
*/
document.addEventListener('DOMContentLoaded', function(){
    
    // Init
    canvasStage(); // Go trough all elements and set/clear them

    // Shadow
    const shadow = document.createElement('div');
    shadow.classList.add('shadow');
    shadow.setAttribute('data-close-all', '');
    document.body.appendChild(shadow);

    /**
     * **************************************************************
     * Listening for clicks
     * **************************************************************
     */
    document.addEventListener('click', function(event){

        if(event.target.hasAttribute('data-close-all') || event.target.closest('[data-close-all]')){
            canvasStage();
            shadowHandler();
        }

        else if(event.target.hasAttribute('data-pointer') || event.target.closest('[data-pointer]')){

            let targetPointerValue = event.target.closest('[data-pointer]').getAttribute('data-pointer');
            let pointerElement = document.querySelector('[data-pointer=' + targetPointerValue + ']');
            let targetElement = document.querySelector('[data-target=' + targetPointerValue + ']');
            
            if(pointerElement.getAttribute('data-pointer-active') === "true" && targetElement.getAttribute('data-target-active') === "true"){
                canvasStage();
                shadowHandler(pointerElement);
            } else {

                if(activePointerCheck() === true){
                    canvasStage();
                } else {
                    shadowHandler(pointerElement);
                }

                targetElement.setAttribute('data-target-active', 'true');
                pointerElement.setAttribute('data-pointer-active', 'true');

            }
        }

    });


    /**
     * **************************************************************
     * Set all pointers and targets as "FALSE".
     * This means that they are not active
     * **************************************************************
     */
    function canvasStage(){
        
        // Set pointer targets status
        let pointerElements = document.querySelectorAll('[data-pointer]');
        for(let i = 0; i < pointerElements.length; i++){
            pointerElements[i].setAttribute('data-pointer-active', 'false');
        }

        // Set element targets status
        let targetElements = document.querySelectorAll('[data-target]');
        for(let i = 0; i < targetElements.length; i++){
            targetElements[i].setAttribute('data-target-active', 'false');
        }

    }

    /**
     * **************************************************************
     * Check if theres multiple active pointers
     * **************************************************************
     */
    function activePointerCheck(){
        let pointerElements = document.querySelectorAll('[data-pointer-active="true"]');

        if(pointerElements.length > 0){
            return true;
        } else {
            return false;
        }
    }

    /**
     * **************************************************************
     * Toggle the shadow
     * **************************************************************
     */
    function shadowHandler(pointerElement){

        // Check if there is any pointerElement
        if(pointerElement){
            
            // Check if element has shadow activated or not
            if(!pointerElement.hasAttribute('data-shadow-disable')){

                // Check if there is any shadow index
                if(pointerElement.hasAttribute('data-shadow-z-index')){
                    if(!shadow.classList.contains('visible')){
                        shadow.style.zIndex = pointerElement.getAttribute('data-shadow-z-index');
                    } else {
                        shadow.style.zIndex = "";
                    }
                }

            
                if(activePointerCheck() === false){
                    shadow.classList.toggle('visible');
                }

            }

        }

        else if(shadow.classList.contains('visible')){
            shadow.classList.remove('visible')
        }
    }



});