function updateLocation() {
    while (true) {
        var resp = $.getJSON('http://cors.io/?u=http://api.open-notify.org/iss-now.json');

        var position = resp.responseJSON.iss_position;
        var lat = position.latitude;
        var long = position.longitude;
        //delay
    }
}
