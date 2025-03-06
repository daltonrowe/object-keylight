import { cube } from "scad-js";
import { panelDepth, panelHeight, panelWidth } from "../constants.js";

export default function () {
  return cube([panelWidth, panelDepth, panelHeight]);
}
