import { cube, union } from "scad-js";
import {
  diffuserDepth,
  diffuserEndcapHeight,
  diffuserHeight,
  diffuserWidth,
} from "../constants.js";

export default function () {
  return union(
    cube([diffuserWidth, diffuserDepth, diffuserHeight]),
    cube([diffuserHeight, diffuserDepth, diffuserEndcapHeight])
      .translate_z(diffuserEndcapHeight / 2 - diffuserHeight / 2)
      .translate_x(diffuserWidth / 2),
  );
}
