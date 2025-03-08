$fn = 100;
union()
{
  cube(size = [145, 47.5, 1.9], center = true);
  difference()
  {
    translate(v = [72.5, 0, 0])
    {
      translate(v = [0, 0, 9.05])
      {
        cube(size = [1.9, 47.5, 20], center = true);
      }
    }
    #union()
    {
      translate(v = [0, 0, 10])
      {
        rotate(a = 90, v = [0, 1, 0])
        {
          cylinder(h = 148.8, r = 5, center = true);
        }
      }
    }
  }
  intersection()
  {
    translate(v = [72.5, 0, 0])
    {
      translate(v = [0, 0, 20])
      {
        rotate(a = 45, v = [0, 1, 0])
        {
          cube(size = [3.8, 43.7, 3.8], center = true);
        }
      }
    }
    translate(v = [68.7, 0, 0])
    {
      translate(v = [0, 0, 10.05])
      {
        cube(size = [9.5, 47.5, 20], center = true);
      }
    }
  }
}
