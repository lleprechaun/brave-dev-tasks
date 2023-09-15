class MessageManager {

    showError(error) {
        if(typeof error === 'object'){
            Object.keys(error).forEach((key) => {
                this.show(error[key], 'error')
            })
        } else {
            this.show(error, 'error')
        }
    }

    showSuccess(msg) {
        this.show(msg, 'success')
    }

    show(error, className) {
        const errorArea = document.createElement('div')
        errorArea.innerHTML = `<label class="error-label">
                                    <div class="alert ${className}">
                                        <span class="errorText">
                                        ${error}
		                                <br class="clear"/>
                                        </span>
                                    </div>
                                </label>`;
		const a = document.getElementById('app');
		a.prepend(errorArea)
        //document.body.appendChild(errorArea);

        setTimeout(() => {
            let animateBlock = errorArea.animate([
                {opacity: 1},
                {opacity: 0}
            ], {duration: 400, easing: 'ease-in-out', fill: 'forwards'});
            animateBlock.addEventListener('finish', () => { errorArea.classList.add('hiddenBlock') });
        }, 4500)
        setTimeout(() => {
            a.removeChild(errorArea);
        }, 5000)
    }

}

const $message = new MessageManager()
export { $message };