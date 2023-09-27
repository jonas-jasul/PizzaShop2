using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.DatabaseContext;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaImageController : ControllerBase
    {
        private readonly MyDatabaseContext _databaseContext;

        public PizzaImageController(MyDatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet]
        [Route("GetPizzasWithImages")]
            
        public IActionResult GetPizzasWithImages()
        {
            var pizzasWithImages = _databaseContext.Pizza
                .Select(pizza => new
                {
                    pizza.Id,
                    pizza.Name,
                    pizza.ImageFileName,
                    pizza.Description,
                    pizza.Slug
                })
                .ToList();
            return Ok(pizzasWithImages);
        }


        [HttpGet]
        [Route("GetImage/{imageName}")]
        [ResponseCache(Duration = 3600)]
        public IActionResult GetImage(string imageName)
        {
            var imagePath = Path.Combine("Images", imageName);

            if(System.IO.File.Exists(imagePath))
            {
                var imageBytes = System.IO.File.ReadAllBytes(imagePath);
                Response.Headers.Add("Content-Type", "image/jpeg");
                return File(imageBytes, "image/jpeg");
            }
            return NotFound();
        }
    }
}
