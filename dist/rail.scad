$fn = 100;
difference()
{
  cube(size = [144.97, 30, 5], center = true);
  translate(v = [0, 3, 0])
  {
    union()
    {
      translate(v = [0, -6, 0])
      {
        translate(v = [0, 0, 2.5])
        {
          rotate(a = 45, v = [1, 0, 0])
          {
            cube(size = [145, 3.6, 3.6], center = true);
          }
        }
      }
      translate(v = [0, 6, 0])
      {
        translate(v = [0, 0, 2.5])
        {
          rotate(a = 45, v = [1, 0, 0])
          {
            cube(size = [145, 3.6, 3.6], center = true);
          }
        }
      }
    }
  }
}
