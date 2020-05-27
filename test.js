(function(){
    console.log('hellllllllo');
        var events = {
            'app.record.index.change.a'
        };

    kintone.events.on(events, function (event) {
        var get_value1 = event['record']['a']['value'];
        var get_value2 = event['record']['b']['value'];

        event['record']['y']['value'] = get_value1 + get_value2 / 2;
        return event;
    });
})();

