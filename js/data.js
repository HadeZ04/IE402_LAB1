import { AH1TNLine } from "../provinces/TayNinh/AH1.js";
import { QL22BTNLine } from "../provinces/TayNinh/QL22B.js";
import { AH1DongNaiLine } from "../provinces/DongNai/AH1.js";
import { QL51DNLine } from "../provinces/DongNai/QL51.js";
import { QL56DNLine } from "../provinces/DongNai/QL56.js";
import { QL20DNLine } from "../provinces/DongNai/QL20.js";
import { QL51LDLine as QL51VTLine } from "../provinces/VungTau/QL51.js";
import { QL56LDLine as QL56VTLine } from "../provinces/VungTau/QL56.js";
import { QL20LDLine } from "../provinces/LamDong/QL20.js";
import { QL14BPLine } from "../provinces/BinhPhuoc/QL14.js";
import { OneABTLine } from "../provinces/BinhThuan/1A.js";
import { QL1ANTLine } from "../provinces/NinhThuan/QL1A.js";

const DEFAULT_LINE_SYMBOL = {
  type: "simple-line",
  color: [226, 119, 40],
  width: 3,
};

const DEFAULT_POPUP_TEMPLATE = {
  title: "{Name}",
  content:
    "Chiều dài: <b>{ChieuDai}</b> <br> Lộ giới: <b>{LoGioi}</b> <br> Đi qua: <b>{TinhDiQua}</b>",
};

function toDetailLine(sourceLine, name, tinhDiQua, loGioi = "Đang cập nhật") {
  return {
    type: "polyline",
    paths: sourceLine.paths,
    Name: name,
    ChieuDai: `${sourceLine.Length} km`,
    LoGioi: loGioi,
    TinhDiQua: tinhDiQua,
    symbol: { ...DEFAULT_LINE_SYMBOL },
    popupTemplate: { ...DEFAULT_POPUP_TEMPLATE },
  };
}

export const points = [];

export const lines = [
  toDetailLine(AH1TNLine, "AH1", "Tây Ninh", "Đang cập nhật"),
  toDetailLine(QL22BTNLine, "Quốc lộ 22B", "Tây Ninh", "Đang cập nhật"),

  toDetailLine(AH1DongNaiLine, "AH1", "Đồng Nai", "Đang cập nhật"),
  toDetailLine(QL51DNLine, "Quốc lộ 51", "Đồng Nai", "60 m"),
  toDetailLine(QL51VTLine, "Quốc lộ 51", "Bà Rịa - Vũng Tàu", "Đang cập nhật"),

  toDetailLine(QL56DNLine, "Quốc lộ 56", "Đồng Nai", "45 m"),
  toDetailLine(QL56VTLine, "Quốc lộ 56", "Bà Rịa - Vũng Tàu", "Đang cập nhật"),

  toDetailLine(QL20DNLine, "Quốc lộ 20", "Đồng Nai", "Đang cập nhật"),
  toDetailLine(QL20LDLine, "Quốc lộ 20", "Lâm Đồng", "27-41 m"),

  toDetailLine(QL14BPLine, "Quốc lộ 14", "Bình Phước", "Đang cập nhật"),
  toDetailLine(OneABTLine, "Quốc lộ 1A", "Bình Thuận", "Đang cập nhật"),
  toDetailLine(QL1ANTLine, "Quốc lộ 1A", "Ninh Thuận", "Đang cập nhật"),
];

export const polygons = [];

export const jsondata = {
  points,
  lines,
  polygons,
};

export default jsondata;
