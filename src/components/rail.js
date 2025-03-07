import { cube, difference, union } from "scad-js";
import {
  diffuserSpacing,
  panelHeight,
  panelWidth,
  railDepth,
  railHeight,
  railOffset,
  railWidth,
} from "../constants.js";

export default function () {
  return difference(
    cube([railWidth, railDepth, railHeight]),
    union(
      cube([panelWidth, panelHeight * 2, panelHeight * 2])
        .rotate_x(45)
        .translate_z(railHeight / 2)
        .translate_y((diffuserSpacing / 2) * -1),
      cube([panelWidth, panelHeight * 2, panelHeight * 2])
        .rotate_x(45)
        .translate_z(railHeight / 2)
        .translate_y(diffuserSpacing / 2),
    ).translate_y(railOffset),
  );
}
