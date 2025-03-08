import { cube, difference, intersection, sphere, union } from "scad-js";
import {
  mountCollarDepth,
  mountCollarHeight,
  mountCollarWidth,
  mountDepth,
  mountHeight,
  mountNeckHeight,
  mountNeckWidth,
  mountWidth,
  nothing,
} from "../constants.js";

export default function () {
  return intersection(
    sphere(100, 100, 100).translate_y(70),
    difference(
      cube([mountCollarWidth, mountCollarDepth, mountCollarHeight]),
      cube([mountWidth, mountDepth, mountHeight]),
      cube([mountNeckWidth, mountCollarDepth + nothing, mountNeckHeight]).translate_z(((mountCollarHeight / 2 - mountNeckHeight / 2) + nothing) * -1),
    )
  );
}
