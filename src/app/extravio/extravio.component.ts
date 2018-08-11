import {
  Component,
  OnInit
} from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-extravio',
  templateUrl: './extravio.component.html',
  styleUrls: ['./extravio.component.css']
})
export class ExtravioComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  //   var map = L.map('mapid').setView([19.42,-99.14], 13);

  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(map);
  // }
  var mymap = L.map('mapid').setView([19.4284504,-99.1469259], 13);

  var greenIcon = L.icon({
    iconUrl: './../assets/huella.svg',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
  }).addTo(mymap);
  
  L.marker([19.4284504,-99.1469259], {icon: greenIcon}).addTo(mymap);
	// L.marker([19.4284504,-99.1469259]).addTo(mymap)
		// .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
}
}

