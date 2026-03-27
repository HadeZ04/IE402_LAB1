import { point_template_area, line_template } from "./pointTemplate.js";

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  return distance;
}

function calculateLength(paths) {
  let totalLength = 0;
  for (let i = 0; i < paths.length - 1; i++) {
    const [lon1, lat1] = paths[i];
    const [lon2, lat2] = paths[i + 1];
    totalLength += getDistance(lat1, lon1, lat2, lon2);
  }
  return totalLength.toFixed(2);
}

export function createLines(paths, name, location, color = [226, 119, 40]) {
  const length = calculateLength(paths);
  const width = 4; // Default width, can be parameterized if needed
  return {
    type: "polyline",
    paths: paths,
    symbol: {
      type: "simple-line",
      color: [255, 0, 0],
      width: width,
    },
    Name: name,
    Location: location,
    Length: length,
    Width: width,
    popupTemplate: line_template,
  };
}
