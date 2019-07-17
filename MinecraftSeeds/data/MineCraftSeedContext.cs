
using Microsoft.EntityFrameworkCore;

namespace MinecraftSeeds.data
{
    public class MineCraftSeedContext:DbContext
    {
        public MineCraftSeedContext(DbContextOptions<MineCraftSeedContext> options):base(options)
        {

        }
              public DbSet<seed> Seeds {get; set;}
<<<<<<< HEAD

              public DbSet<image> Images { get; set; }
=======
              
              public DbSet<Image> Images {get; set;}
>>>>>>> a0390d3ce27dfd39ee8e6acc0b870faff5fa1299
    }
}