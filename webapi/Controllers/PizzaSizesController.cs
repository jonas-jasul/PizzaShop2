using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.DatabaseContext;
using webapi.DataModel;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaSizesController : ControllerBase
    {
        private readonly MyDatabaseContext _dbcontext;

        public PizzaSizesController(MyDatabaseContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("GetSizesList")]
        public async Task<IActionResult> GetSizesList()
        {
            return Ok(_dbcontext.PizzaSizes.ToList());
        }

    }
}
