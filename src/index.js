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
    rail(1),
    rail(1).rotate_y(180).translate_z(panelDepth),
  ).translate_z((panelDepth / 2) * -1);
}

export default function () {
  return union(
    cube([panelWidth, panelDepth + railHeight, boxThickness]).translate_z(
      (railDepth / 2) * -1,
    ),
    rails().rotate_x(90),
  );
}
