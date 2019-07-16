using System.Linq;

namespace MinecraftSeeds.data
{
     public static class DbInitializer
    {
        public static void Initialize(MineCraftSeedContext Context)
        {
            if (Context.Seeds.Any())
            {
                return;
            }

            var seeds = new seed[]{
                new seed{SeedValue = "0123456789",SeedText="random seed",Description = "a pretty place",Title="First Seed",Image = "0", version = "0"},
                new seed{SeedValue = "0000000000",SeedText="random seed",Description = "a prettier place",Title="Second Seed",Image = "0", version = "0"}
        };
        foreach (seed item in seeds)
        {
            Context.Add(item);
        }
        Context.SaveChanges();
        }
    }
}