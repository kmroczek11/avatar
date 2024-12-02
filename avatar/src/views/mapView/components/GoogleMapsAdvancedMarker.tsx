import { useEffect, useState } from "react"

interface GoogleMapsAdvancedMarkerProps {
  map: google.maps.Map | null;
  latitude: number;
  longitude: number;
  content: HTMLDivElement | null;
  title: string;
}

export default function GoogleMapsAdvancedMarker(props: GoogleMapsAdvancedMarkerProps) {
  const { map, latitude, longitude, content, title } = props;

  useEffect(() => {
    if (map && content) {
      const position = { lat: latitude, lng: longitude };

      new google.maps.marker.AdvancedMarkerElement({
        map,
        position,
        content, // Set custom HTML content
        title, // Tooltip when hovering over marker
      });
    }
  }, [map, latitude, longitude, content, title]);

  return null
}