using System.ComponentModel.DataAnnotations.Schema;

namespace MinecraftSeeds.data
{
    public class seed
    {
        public int SeedID { get; set; }

        public string SeedValue { get; set; }
        public string SeedText {get; set;}
        public string Title { get; set; }
        public string Description { get; set; }
        [Column(TypeName = "varBinary(max)")]
        public byte[] Image {get; set;}
        public string Version {get; set;}
    }
}
