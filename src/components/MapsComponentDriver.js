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

      
      map.current = new window.H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          zoom: 12, 
          center: waypoints[0], 
        }
      );

      
      new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map.current));
      window.H.ui.UI.createDefault(map.current, defaultLayers);

      
      let routingUrl = `https://router.hereapi.com/v8/routes?transportMode=car&origin=${waypoints[0].lat},${waypoints[0].lng}&destination=${waypoints[waypoints.length - 1].lat},${waypoints[waypoints.length - 1].lng}`;

      
      if (waypoints.length > 2) {
        waypoints.slice(1, -1).forEach((point) => {
          routingUrl += `&via=${point.lat},${point.lng}`;
        });
      }

      routingUrl += `&return=polyline&apikey=${apikey}`;

      
      fetch(routingUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.routes && data.routes.length > 0) {
            const route = data.routes[0];
            const routeSections = route.sections; 

            
            routeSections.forEach((section) => {
              
              const lineString = window.H.geo.LineString.fromFlexiblePolyline(section.polyline);

              
              const routeLine = new window.H.map.Polyline(lineString, {
                style: { strokeColor: "blue", lineWidth: 5 },
              });

              
              map.current.addObject(routeLine);

              
              map.current.getViewModel().setLookAtData({
                bounds: routeLine.getBoundingBox(),
              });
            });

            
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
