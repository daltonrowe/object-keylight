import { cube, union } from "scad-js";
import rail from "./components/rail.js";
import {
  boxThickness,
  panelDepth,
  panelWidth,
  railDepth,
  railHeight,
} from "./constants.js";

function rails() {
  return union(
    rail(4),
    rail(4).rotate_y(180).translate_z(panelWidth),
  ).translate_z((panelWidth / 2) * -1);
}

export default function () {
  return union(
    cube([panelDepth * 4, panelWidth + railHeight, boxThickness]).translate_z(
      (railDepth / 2) * -1,
    ),
    rails().rotate_x(90),
  );
}
