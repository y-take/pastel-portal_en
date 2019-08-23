// Display Event and Fair Calendar information in the Notices section
(function() {
    'use strict';

    kintone.events.on('portal.show', function() {

        var body = {
            'app': 698,
            'query': 'date >= TODAY() order by date asc, $id asc',
            'fields': ['$id', 'date', 'event_name']
        };

        kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
            var noticeSpace = $('<ul>', {
            }).appendTo('.notice');

            for (var i = 0; i < 10; i++) {
                $('<li>' + resp.records[i].date.value + '</br>'
                + resp.records[i].event_name.value + '</li>').appendTo(noticeSpace);
            }
        });
    });
})();
