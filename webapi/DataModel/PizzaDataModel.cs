using System.ComponentModel.DataAnnotations;

namespace webapi.DataModel
{
    public class PizzaDataModel
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string ImageFileName { get; set; }

        public string Description { get; set; }

        public string Slug { get; set; }
    }
}
