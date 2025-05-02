document.querySelector('.search-button').onclick = function () {

    let city = document.querySelector('select[name="select1"]').value;
    let rooms = document.querySelector('select[name="select2"]').value;
    let priceFrom = document.querySelector('.input-price-1').value;
    let priceTo = document.querySelector('.input-price-2').value;

    if (city === 'city' || rooms === 'rooms') {
        alert('Выберите город и количество комнат');
        return;
    }

    if (city === 'Almaty' && rooms === '1-room') page = '/index/search/almaty-1-room.html';
    if (city === 'Astana' && rooms === '2-rooms') page = '/index/search/astana-2-rooms.html';

    window.location.href = page + '?city=' + city + '&rooms=' + rooms + '&priceFrom=' + priceFrom + '&priceTo=' + priceTo;
};