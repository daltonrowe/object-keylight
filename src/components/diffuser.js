import { cube, cylinder, difference, intersection, union } from "scad-js";
import {
  diffuserDepth,
  diffuserEndcapHeight,
  diffuserHeight,
  diffuserHoleRadius,
  diffuserLockerSize,
  diffuserWidth,
} from "../constants.js";

export default function () {
  return union(
    cube([diffuserWidth, diffuserDepth, diffuserHeight]),
    difference(

      cube([diffuserHeight, diffuserDepth, diffuserEndcapHeight])
        .translate_z(diffuserEndcapHeight / 2 - diffuserHeight / 2)
        .translate_x(diffuserWidth / 2),
      cylinder(diffuserWidth + diffuserHeight * 2, diffuserHoleRadius).rotate_y(90).translate_z(diffuserEndcapHeight / 2).debug()
    ),
    intersection(
      cube([diffuserLockerSize, diffuserDepth, diffuserLockerSize])
        .rotate_y(45)
        .translate_z(diffuserEndcapHeight)
        .translate_x(diffuserWidth / 2),
      cube([diffuserHeight * 5, diffuserDepth, diffuserEndcapHeight])
        .translate_z(diffuserEndcapHeight / 2 - diffuserHeight / 2 + 1)
        .translate_x(diffuserWidth / 2 - (diffuserHeight * 5 / 2) + diffuserHeight / 2),
    )
  );
}
