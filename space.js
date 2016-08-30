function updateLocation() {
    $.getJSON('http://cors.io/?u=http://api.open-notify.org/iss-now.json', function(data){
        console.log(data);
        var position = data.iss_position;
        var lat = position.latitude;
        var long = position.longitude;
        console.log('hello');
        $('#latitude').text(lat);
        $('#longitude').text(long);
    });
        setTimeout(updateLocation, 5000);
}

function updatePeople() {
    $.getJSON('http://cors.io/?u=http://api.open-notify.org/astros.json', function(data){
        console.log(data);
        $('#crew').empty();
        var people = data.people;
        for (var person in people) {
            $('#crew').append("<li>" + people[person].name + "</li>");
        }
    });
        setTimeout(updatePeople, 5000);
}


        //delay

updateLocation();
updatePeople();

// function moveISS () {
//     $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
//         var lat = data['iss_position']['latitude'];
//         var lon = data['iss_position']['longitude'];
//
//         // See leaflet docs for setting up icons and map layers
//         // The update to the map is done here:
//         iss.setLatLng([lat, lon]);
//         isscirc.setLatLng([lat, lon]);
//         map.panTo([lat, lon], animate=true);
//     });
//     setTimeout(moveISS, 5000);
// }
