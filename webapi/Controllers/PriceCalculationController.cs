using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.DataModel;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PriceCalculationController : ControllerBase
    {
        [Route("CalculatePrice")]
        [HttpPost]

        public IActionResult CalclulatePizzaPrice([FromBody] PizzaPriceDataModel request)
        {
            decimal totalPrice = CalculateTotalPrice(request.Size, request.Toppings);

            var response = new
            {
                TotalPrice = totalPrice
            };
            return Ok(response);

        }

        private decimal CalculateTotalPrice(string size, List<String> toppings)
        {
            decimal basePrice = 0;
            switch (size.ToLower())
            {
                case "small":
                    basePrice = 8m;
                    break;
                case "medium":
                    basePrice = 10m;
                    break;
                case "large":
                    basePrice = 12m;
                    break;
                default:
                    return 0;
            }
            decimal toppingsCost = toppings.Count * 1.0m;
            decimal totalCost = basePrice + toppingsCost;

            if (toppings.Count > 3)
            {
                decimal discount = totalCost * 0.10m;
                totalCost -= discount;
            }
            return totalCost;
        }
    }
}
