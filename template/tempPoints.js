import { point_template_tree, point_template_light, point_template_chair, point_template_area, point_template_university } from './pointTemplate.js';

export var tempPoints = [
    {
        type: "point",
        longitude: 106.7986823851482,
        latitude: 10.876185156455417,
        Name: "Cây xanh 01",
        Location: "trong khuông viên trường ĐH KHTN",
        symbol: {
            type: "simple-marker",
            color: [0, 153, 51],
            outline: {
                color: [255, 255, 255],
                width: 1
            }
        },
        popupTemplate: point_template_tree
    },
    {
        type: "point",
        longitude: 106.79597871846113,
        latitude: 10.872455347930213,
        Name: "Bóng Đèn 01",
        Location: "trong khuông viên trường ĐH TDTT",
        symbol: {
            type: "simple-marker",
            color: [255, 204, 0],
            outline: {
                color: [255, 255, 255],
                width: 1
            }
        },
        popupTemplate: point_template_light
    },
    {
        type: "point",
        longitude: 106.80378931111271,
        latitude: 10.870369163501929,
        Name: "Ghế ngồi",
        Location: "trong khuông viên trường ĐH CNTT",
        symbol: {
            type: "simple-marker",
            color: [153, 51, 51],
            outline: {
                color: [255, 255, 255],
                width: 1
            }
        },
        popupTemplate: point_template_chair
    }
]