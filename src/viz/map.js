import * as React from "react";
import mapboxgl from "mapbox-gl";
import ReactMapGL, { Source, Layer } from "react-map-gl";

import boundaries from "../data/districtes.json";
import { stops } from "../utils/map-colors";

// color.type: expected one of [identity, exponential, interval, categorical],
export const dataLayer = (property) => ({
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      type: "interval",
      property: property,
      stops: stops,
      // type: "interval",
    },
    "fill-outline-color": "#000",
    "fill-opacity": 0.75,
  },
});

const GeoJSONMap = ({ property, title }) => {
  const [hoverInfo, setHoverInfo] = React.useState(null);

  const [viewport, setViewport] = React.useState({
    longitude: 2.154007,
    latitude: 41.390205,
    zoom: 10,
    bearing: 0,
    pitch: 0,
  });

  const [settings, setSettings] = React.useState({
    dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false,
  });

  const layer = dataLayer(property);

  const onHover = React.useCallback((event) => {
    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event;

    const hoveredFeature = features && features[0];
    setHoverInfo(
      hoveredFeature
        ? {
            feature: hoveredFeature,
            x: offsetX,
            y: offsetY,
          }
        : null
    );
  }, []);

  return (
    <div style={{ height: `450px`, marginTop: 0 }}>
      <h3 className="text-center text-xl mb-2">{title}</h3>
      <ReactMapGL
        {...viewport}
        {...settings}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
        onHover={onHover}
      >
        <Source type="geojson" data={boundaries}>
          <Layer {...layer} />
        </Source>
        {hoverInfo && hoverInfo.feature.properties.NOM && (
          <div
            className="tooltip"
            style={{
              position: `absolute`,
              margin: `8px`,
              // padding: `4px`,
              background: `rgba(0, 0, 0, 0.8)`,
              color: `#fff`,
              maxWidth: `200px`,
              fontSize: `16px`,
              zIndex: 9,
              pointerEvents: `none`,
              left: hoverInfo.x,
              top: hoverInfo.y,
            }}
            className="rounded-xl p-4"
          >
            <div>District: {hoverInfo.feature.properties.NOM}</div>
            <div>
              Value: {Math.round(hoverInfo.feature.properties[property] * 100)}%
            </div>
          </div>
        )}
      </ReactMapGL>
    </div>
  );
};

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default GeoJSONMap;
