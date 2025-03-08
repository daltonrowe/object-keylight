$fn = 100;
union()
{
  cube(size = [145, 47.5, 1.9], center = true);
  translate(v = [72.5, 0, 0])
  {
    translate(v = [0, 0, 9.05])
    {
      cube(size = [1.9, 47.5, 20], center = true);
    }
  }
}
