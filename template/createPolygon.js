import { info_province_template } from "./pointTemplate.js";

export function createPolygon(paths,  name, area, population, color = [226, 119, 40]) {
    return {
        type: "polygon",
        rings: paths,
        symbol: {
            type: "simple-fill",
            color: [...color, 0.15],
            outline: {
                color: color,
                width: 1.5
            }
        },
        PROVINCE_NAME: name,
        PROVINCE_AREA: area,
        PROVINCE_POPULATION: population,
        popupTemplate: info_province_template,
        
    }
}
