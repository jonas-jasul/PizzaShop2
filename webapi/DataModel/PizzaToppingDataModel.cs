using System.ComponentModel.DataAnnotations;

namespace webapi.DataModel
{
    public class PizzaToppingDataModel
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
