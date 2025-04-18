import React, { useEffect, useRef, useState } from "react";

const PinLocationComponent = ({ apikey, setAddress }) => {
  const mapRef = useRef(null);
  const map = useRef(null);
  const platform = useRef(null);
  const [pins, setPins] = useState([]);

  useEffect(() => {
    if (!map.current) {
      platform.current = new window.H.service.Platform({ apikey });
      const defaultLayers = platform.current.createDefaultLayers();

      // Create the map instance
      map.current = new window.H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          zoom: 12,
          center: { lat: 26.9124, lng: 75.7873 }, // Center on Jaipur
        }
      );

      // Add behavior and UI elements
      new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map.current));
      window.H.ui.UI.createDefault(map.current, defaultLayers);

      // Add click event to pin locations
      map.current.addEventListener("tap", (evt) => {
        const coord = map.current.screenToGeo(evt.currentPointer.viewportX, evt.currentPointer.viewportY);
        const newPin = { lat: coord.lat, lng: coord.lng };

        // Update to keep only the most recent pin
        setPins([newPin]); // Keep only the latest pin

        // Update the address state with the latest pin's coordinates
        setAddress(`${newPin.lat} ${newPin.lng}`);

        // Clear previous markers before adding a new one
        map.current.removeObjects(map.current.getObjects()); // Remove existing markers
        const marker = new window.H.map.Marker({ lat: newPin.lat, lng: newPin.lng });
        map.current.addObject(marker);
      });
    }
  }, [apikey, setAddress]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "400px",
          marginBottom: "20px",
        }}
        ref={mapRef}
      />
    </div>
  );
};

export default PinLocationComponent;
