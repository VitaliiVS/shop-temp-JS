let buttonsContainer = document.querySelector('.page-content');
let cartCounterLabel = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;

function buttonClickHandler(event) {
    let target = event.target;
    if (target.classList.contains('item-actions__cart')) {
        cartCounterLabel.innerHTML = ++cartCounter;

        if(cartCounter === 1) {
            cartCounterLabel.style.display = 'block';
        }

        let mockData = target.parentElement.previousElementSibling.innerHTML;

        mockData = +mockData.replace(/^\$(\d+)\s\D+(\d+).*/g, '$1.$2');
        cartPrice = Math.round(cartPrice * 100 + mockData * 100) / 100;

        let resetHTML = target.innerHTML;

        target.innerHTML = `Added $${cartPrice.toFixed(2)}`;

        buttonsContainer.removeEventListener('click', buttonClickHandler); 
        target.disabled = true;

        setTimeout(() => {
            target.innerHTML = resetHTML;
            buttonsContainer.addEventListener('click', buttonClickHandler);
            target.disabled = false;
        }, 1500);
    }
}

buttonsContainer.addEventListener('click', buttonClickHandler); 