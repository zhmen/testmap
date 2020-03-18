function init() {
    var myMap = new ymaps.Map('map', {
        center: [59.941828, 30.367097],
		
        zoom: 13,
        controls: []
    }, {
    // Будет производиться поиск по топонимам и организациям.
    searchControlProvider: 'yandex#search'
	});
    
    // Создадим экземпляр элемента управления «поиск по карте»
    // с установленной опцией провайдера данных для поиска по организациям.
    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        }
    });
    
    myMap.controls.add(searchControl);
    
    // Программно выполним поиск определённых кафе в текущей
    // прямоугольной области карты.
    searchControl.search('Шоколадница');
}

ymaps.ready(init);