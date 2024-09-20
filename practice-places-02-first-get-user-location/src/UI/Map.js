document.getElementById('map').innerHTML = ''; 

export class Map {
  constructor(coords) {
    this.render(coords);
  }

  render(coordinates) {
    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
        zoom: 16
      })
    });
  }
}
