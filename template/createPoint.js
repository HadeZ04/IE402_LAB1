import { point_template_university } from "./pointTemplate.js";

export function createPoint(
  longitude,
  latitude,
  name,
  location,
  namThanhLap = "",
  nganh = "",
  soSV = "",
  symbol = {
    type: "simple-marker",
    color: [0, 153, 51],
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
  },
  popupTemplate = point_template_university,
) {
  return {
    type: "point",
    longitude: longitude,
    latitude: latitude,
    Name: name,
    Location: location,
    NamThanhLap: namThanhLap,
    Nganh: nganh,
    SoSV: soSV,
    symbol: symbol,
    popupTemplate: popupTemplate,
  };
}
