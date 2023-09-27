using System.ComponentModel.DataAnnotations;

namespace webapi.DataModel
{
    public class PizzaSizeDataModel
    {
        [Key]
        public int Id { get; set; }
        public string Size { get; set; }
        public float Price { get; set; }
    }
}
