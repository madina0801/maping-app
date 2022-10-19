'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Geolocation API
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

						const coords = [latitude, longitude];

      // Map
      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
							
						map.on('click', function(mapEvent) {
							const {lat, lng} = mapEvent.latlng;
							L.marker([lat, lng])
        .addTo(map)
        .bindPopup(L.popup({
									maxWidth: 250,
									minWidth: 100,
									autoClose: false,
									closeOnClick: false,
									className: 'running-popup'
								}))
								.setPopupContent('Workout')        
								.openPopup();
						})
    },
    function () {
      alert('Could not get your position!');
    }
  );
}
