function toast({title = '', message = '', type = 'info', duration = 3000}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        main.appendChild(toast);
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast)
        },duration + 1000);

        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId)
            }
        }
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-check',
            warning: 'fa-solid fa-circle-check',
            error: 'fa-solid fa-circle-check',
        };
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);
        toast.style.animation = `slideInLeft ease .5s, fadeOut linear 1s ${delay}s forwards`;
        toast.classList.add('toast', `toast--${type}`);
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-sharp fa-solid fa-xmark"></i>
            </div>
        `;
        
    }
}
function showSuccessToast() {
    toast({
        title: 'Success hihi',
        message: 'Thanh cong nheeeeeeeeeeeeeeeeeeeeee',
        type: 'success',
        duration: 8000
    })
}
function showErrorToast() {
    toast({
        title: 'Error hihi',
        message: 'That bai nheeeeeeeeeeeeeeeeeeeeeeee',
        type: 'error',
        duration: 8000
    })
}