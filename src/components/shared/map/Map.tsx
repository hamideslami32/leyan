import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
// import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: '/images/map-marker.png',
  shadowUrl: '/images/marker-shadow.png',
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  return (
    <MapContainer
      center={[35.7036342, 51.358716]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%' }}
      className='border-md'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[35.7036342, 51.358716]} icon={DefaultIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
