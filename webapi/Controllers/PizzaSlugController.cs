using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.DatabaseContext;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaSlugController : ControllerBase
    {
        private readonly MyDatabaseContext _dbContext;

        public PizzaSlugController (MyDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetPizzaSlug/{slug}")]
        public async Task<IActionResult> GetPizzaSlug(string slug)
        {
            var pizza = await _dbContext.Pizza.FirstOrDefaultAsync(x => x.Slug == slug);

            if(pizza == null)
            {
                return NotFound();
            }

            return Ok(pizza);
        }
    }
}
