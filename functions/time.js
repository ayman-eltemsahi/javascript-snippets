var Time = {
    afterNHours: function(n) {
        if(!n) n = 0;
        var date = new Date(Date.now());
        date.setHours(date.getHours() + n);
        return date;
    },

    afterNDays: function(n) {
        if(!n) n = 0;
        var date = new Date(Date.now());
        date.setDate(date.getDate() + n);
        return date;
    },

    afterNMonths: function(n) {
        if(!n) n = 0;
        var date = new Date(Date.now());
        date.setMonth(date.getMonth() + n);
        return date;
    },

    currentTime: function() {
        var now = new Date(Date.now());
        return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    },

    dateDifference: function(date1, date2) {
        var diff = date1.getTime() - date2.getTime();
        diff = Math.abs(diff / 1000);
        return {
            seconds: Math.ceil(diff),
            minutes: Math.floor(diff / 60),
            hours: Math.floor(diff / (60 * 60)),
            days: Math.floor(diff / (60 * 60 * 24)),
            months: Math.floor(diff / (60 * 60 * 24 * 30)),
            years: Math.floor(diff / (60 * 60 * 24 * 30 * 21))
        }
    }
};
