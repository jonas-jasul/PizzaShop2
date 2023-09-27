using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.DatabaseContext;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaToppingsController : ControllerBase
    {
        private readonly MyDatabaseContext _dbContext;

        public PizzaToppingsController (MyDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetToppingsList")]
        
        public async Task<IActionResult> GetToppingsList()
        {
            return Ok(_dbContext.PizzaToppings.ToList());
        }

    }
}
