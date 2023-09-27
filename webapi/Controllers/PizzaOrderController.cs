using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Serialization;
using webapi.DatabaseContext;
using webapi.DataModel;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaOrderController : ControllerBase
    {
        private readonly MyDatabaseContext _dbContext;
        public PizzaOrderController(MyDatabaseContext dbcontext)
        {
            _dbContext = dbcontext;
        }
        [HttpPost]
        [Route("PostOrder")]

        public IActionResult PostOrder([FromBody] PizzaOrderDataModel pizzaOrder)
        {
            try
            {
                if (pizzaOrder == null)
                {
                    return BadRequest();
                }


                var newOrder = new PizzaOrderDataModel
                {
                    OrderPizzaName = pizzaOrder.OrderPizzaName, 
                    OrderId = Guid.NewGuid(),
                    OrderSize = pizzaOrder.OrderSize,
                    OrderToppings = pizzaOrder.OrderToppings,
                    OrderPrice = pizzaOrder.OrderPrice,
                    OrderDate = DateTime.UtcNow,


                };
                _dbContext.Orders.Add(newOrder);
                _dbContext.SaveChanges();

                return Ok(newOrder);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetOrders")]
        public async Task<IActionResult> GetOrders() {
            return Ok(_dbContext.Orders.ToList());

        }
    }
}
