function init() {
    var myMap = new ymaps.Map('map', {
        center: [59.941828, 30.367097],
		
        zoom: 10,
        controls: []
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
    //searchControl.search('Петроградка');
}

ymaps.ready(init);