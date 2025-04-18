import React, { useEffect, useRef } from "react";

const MapsComponentDriver = ({ apikey, waypoints }) => {
  const mapRef = useRef(null);
  const map = useRef(null);
  const platform = useRef(null);

  useEffect(() => {
    if (!map.current && waypoints.length > 1) {
      platform.current = new window.H.service.Platform({
        apikey,
      });

      const defaultLayers = platform.current.createDefaultLayers();

      // Create the map instance, centered on the first waypoint
      map.current = new window.H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          zoom: 12, // Adjust zoom level for better visibility
          center: waypoints[0], // Center on the first waypoint
        }
      );

      // Add behavior and UI elements
      new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map.current));
      window.H.ui.UI.createDefault(map.current, defaultLayers);

      // Prepare the routing URL
      let routingUrl = `https://router.hereapi.com/v8/routes?transportMode=car&origin=${waypoints[0].lat},${waypoints[0].lng}&destination=${waypoints[waypoints.length - 1].lat},${waypoints[waypoints.length - 1].lng}`;

      // Add all waypoints in between as 'via' parameters
      if (waypoints.length > 2) {
        waypoints.slice(1, -1).forEach((point) => {
          routingUrl += `&via=${point.lat},${point.lng}`;
        });
      }

      routingUrl += `&return=polyline&apikey=${apikey}`;

      // Fetch the route using the HERE Routing API
      fetch(routingUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.routes && data.routes.length > 0) {
            const route = data.routes[0];
            const routeSections = route.sections; // Get the sections (each step in the route)

            // Loop through the sections to display each section of the route
            routeSections.forEach((section) => {
              // Decode the polyline for each section
              const lineString = window.H.geo.LineString.fromFlexiblePolyline(section.polyline);

              // Create a polyline for the section
              const routeLine = new window.H.map.Polyline(lineString, {
                style: { strokeColor: "blue", lineWidth: 5 },
              });

              // Add the polyline to the map
              map.current.addObject(routeLine);

              // Set the map view to fit the entire route
              map.current.getViewModel().setLookAtData({
                bounds: routeLine.getBoundingBox(),
              });
            });

            // Add markers for all waypoints
            waypoints.forEach((point) => {
              const marker = new window.H.map.Marker(point);
              map.current.addObject(marker);
            });
          }
        })
        .catch((error) => console.error("Routing error:", error));
    }
  }, [apikey, waypoints]);

  return (
    <div className="driver_map_api_div"
      style={{
        width: "400px",
        height: "400px",
      }}
      ref={mapRef}
    />
  );
};

export default MapsComponentDriver;
