$fn = 100;
difference()
{
  cube(size = [143.97, 20, 4], center = true);
  translate(v = [0, 5, 0])
  {
    translate(v = [0, 0, 24])
    {
      rotate(a = 90, v = [1, 0, 0])
      {
        cube(size = [144, 48, 1.8], center = true);
      }
    }
  }
  translate(v = [0, -5, 0])
  {
    translate(v = [0, 0, 24])
    {
      rotate(a = 90, v = [1, 0, 0])
      {
        cube(size = [144, 48, 1.8], center = true);
      }
    }
  }
}
