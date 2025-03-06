$fn = 100;
translate(v = [0, 0, -1])
{
  union()
  {
    translate(v = [1.5, 0, 0])
    {
      cylinder(h = 10, r = 1, center = true);
    }
    cube(size = [3, 3.5, 10], center = true);
    translate(v = [0, 0, -0.8])
    {
      translate(v = [1.25, 0, 0])
      {
        cube(size = [5.5, 3.5, 8.4], center = true);
      }
    }
    translate(v = [1.25, 0, 0])
    {
      translate(v = [0, 0, 6])
      {
        cube(size = [5.5, 3.5, 2], center = true);
      }
    }
  }
}
