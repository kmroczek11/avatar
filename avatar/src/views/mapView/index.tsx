import React from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import { LoadingScreen } from '../../components/lib';
import { Library } from '@googlemaps/js-api-loader';
import GoogleMapsAdvancedMarker from './components/GoogleMapsAdvancedMarker';

interface Location {
  lat: number;
  lng: number;
  accuracy: number;
}

export default function MapView() {
  const [currentLocation, setCurrentLocation] = React.useState<Location | null>(null);
  const [map, setMap] = React.useState<google.maps.Map | null>(null); // Store map instance in state
  const [markerContent, setMarkerContent] = React.useState<HTMLDivElement | null>(null)

  const libraries: Library[] = React.useMemo(() => ['marker'], []);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    libraries,
    version: 'beta',
  });

  // Fetch current location using geolocation
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
          });
        },
        (error: GeolocationPositionError) => {
          console.error('Error getting location: ', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  React.useEffect(() => {
    // Create a custom marker content
    const markerContent = document.createElement('div');
    markerContent.style.padding = '10px';
    markerContent.style.backgroundColor = 'white';
    markerContent.style.borderRadius = '5px';
    markerContent.style.textAlign = 'center';
    markerContent.innerHTML = `
          <strong>📍 You are here!</strong>
        `;

    setMarkerContent(markerContent)
  }, []);

  // Set mapRef and mark the map as ready when it loads
  const handleMapLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance)
  };

  const mapContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
  };

  if (loadError) {
    return <p>Error loading Google Maps API: {loadError.message}</p>;
  }

  if (!currentLocation) {
    return <p>Loading location...</p>;
  }

  return isLoaded && currentLocation ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={{ lat: currentLocation.lat, lng: currentLocation.lng }}
      zoom={16} // Adjust zoom as needed
      options={{
        mapId: process.env.REACT_APP_GOOGLE_MAPS_MAP_ID!,
      }}
      onLoad={handleMapLoad}
    >
      <GoogleMapsAdvancedMarker
        map={map}
        latitude={currentLocation.lat}
        longitude={currentLocation.lng}
        content={markerContent}
        title="You are here!"
      />
    </GoogleMap>
  ) : (
    <LoadingScreen />
  );
}