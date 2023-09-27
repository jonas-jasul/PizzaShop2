using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.DatabaseContext;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly MyDatabaseContext _dbContext;

        public PizzaController(MyDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetPizzasList")]
        public async Task<IActionResult> GetPizzasList()
        {
            return Ok(_dbContext.Pizza.ToList());
        }

    }
}
