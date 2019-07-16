
using Microsoft.EntityFrameworkCore;

namespace MinecraftSeeds.data
{
    public class MineCraftSeedContext:DbContext
    {
        public MineCraftSeedContext(DbContextOptions<MineCraftSeedContext> options):base(options)
        {

        }
              public DbSet<seed> Seeds {get; set;}
    }
}