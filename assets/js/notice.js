/**
 * Notice Modal
 */

const container = document.createElement('div');
container.setAttribute('class', 'notice-wrapper');
document.body.appendChild(container);

class Notice {

    constructor(text, status){
        this.text = text;
        this.status = status;
    }

    show(){
        const notice = document.createElement('div');
        notice.setAttribute('class', 'notice');
    
        /** Create a unique id for every notice */
        function uniqueId(){
            var date = new Date();
            var time = date.toLocaleTimeString();
            var mili = date.getMilliseconds();
            return time + mili;
        }
        const noticeId = uniqueId();
        notice.setAttribute('id', noticeId);

        const msg = document.createElement('span');
        const closeSymbol = document.createTextNode("\u2715");
        const closeBtn = document.createElement('button');
        closeBtn.setAttribute('class', 'close-notice-btn');
        closeBtn.appendChild(closeSymbol);
        
        if(!this.status === null){
            const statusCode = document.createElement('span');
            statusCode.setAttribute('class', 'status-code');
            statusCode.textContent = this.status;
            msg.textContent = this.text;
            notice.classList.add(this.status);
            notice.appendChild(statusCode);
            notice.appendChild(msg);
            notice.appendChild(closeBtn);
        } else {
            msg.textContent = this.text;
            notice.appendChild(msg);
            notice.appendChild(closeBtn);
        }
    
        container.appendChild(notice);
    
        /** Timed based removal of notice */
        setTimeout(function(){
            if(document.getElementById(noticeId)){
                document.getElementById(noticeId).remove();
            }
        }, 10000);
    
        /** Remove notice if close button has been clicked */
        closeBtn.addEventListener('click', event => {
            event.target.parentNode.remove();
        });
    
    }

}