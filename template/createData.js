var points = []
var lines = []
var polygons = []

export function createData(points, lines, polygons = []) {
    return {
        "points": points,
        "lines": lines,
        "polygons": polygons
    }
}
