import { cube, difference, union } from "scad-js";
import {
  diffuserSpacing,
  panelDepth,
  panelHeight,
  railDepth,
  railHeight,
  railOffset,
  railWidth,
} from "../constants.js";

export default function (numberOfPanels = 4) {
  return difference(
    cube([railWidth, railDepth, railHeight]),
    union(
      cube([panelDepth, panelHeight * 2, panelHeight * 2])
        .rotate_x(45)
        .translate_z(railHeight / 2)
        .translate_y((diffuserSpacing / 2) * -1),
      cube([panelDepth, panelHeight * 2, panelHeight * 2])
        .rotate_x(45)
        .translate_z(railHeight / 2)
        .translate_y(diffuserSpacing / 2),
    ).translate_y(railOffset),
  ).scale_x(numberOfPanels);
}
