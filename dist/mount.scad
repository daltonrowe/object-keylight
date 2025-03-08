$fn = 100;
intersection()
{
  translate(v = [0, 70, 0])
  {
    sphere(r = 100);
  }
  difference()
  {
    cube(size = [200, 10, 55], center = true);
    cube(size = [57, 5.7, 71], center = true);
    translate(v = [0, 0, -26.03])
    {
      cube(size = [36, 10.03, 3], center = true);
    }
  }
}
