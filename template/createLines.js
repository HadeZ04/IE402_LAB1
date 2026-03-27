import { point_template_area } from "./pointTemplate.js";

export function createLines(paths, name, location, color = [226, 119, 40]) {
  return {
    type: "polyline",
    paths: paths,
    symbol: {
      type: "simple-line",
      color: [255, 0, 0],
      width: 4,
    },
    Name: name,
    Location: location,
    popupTemplate: point_template_area,
  };
}
