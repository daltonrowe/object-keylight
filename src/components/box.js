import { cube } from "scad-js";
import { boxDepth, boxHeight, boxWidth } from "../constants.js";

export default function () {
  return cube([boxWidth, boxDepth, boxHeight]);
}
