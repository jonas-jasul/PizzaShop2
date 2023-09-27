using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.DataModel
{
    public class PizzaOrderDataModel
    {
        [Key] public int Id { get; set; }

        public Guid OrderId { get; set; }

        public string OrderPizzaName { get; set; }
        public string OrderSize { get; set; }

        public string OrderToppings { get; set; }
        public decimal OrderPrice { get; set; }

        public DateTime OrderDate { get; set; }
    }
}
