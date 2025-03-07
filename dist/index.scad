$fn = 100;
union()
{
  translate(v = [0, 0, -15])
  {
    cube(size = [145, 55, 4], center = true);
  }
  rotate(a = 90, v = [1, 0, 0])
  {
    translate(v = [0, 0, -25])
    {
      union()
      {
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
        translate(v = [0, 0, 50])
        {
          rotate(a = 180, v = [0, 1, 0])
          {
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
          }
        }
      }
    }
  }
}
