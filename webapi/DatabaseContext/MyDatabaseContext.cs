using Microsoft.EntityFrameworkCore;
using webapi.DatabaseContext;
using webapi.DataModel;


namespace webapi.DatabaseContext
{

    public class MyDatabaseContext : DbContext
    {
        public DbSet<PizzaSizeDataModel> PizzaSizes { get; set; }
        public DbSet<PizzaToppingDataModel> PizzaToppings { get; set; }
        public DbSet<PizzaDataModel> Pizza { get; set; }
        //public DbSet<PizzaImageDataModel> PizzaImages { get; set; }

        public DbSet<PizzaOrderDataModel> Orders { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "db");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<PizzaSizeDataModel>().HasData(
                new PizzaSizeDataModel { Id = 1, Size = "Small", Price = 8 },
                new PizzaSizeDataModel { Id = 2, Size = "Medium", Price = 10 },
                new PizzaSizeDataModel { Id = 3, Size = "Large", Price = 12 }
                );

            modelBuilder.Entity<PizzaToppingDataModel>().HasData(
                new PizzaToppingDataModel { Id = 1, Name = "Pepperoni" },
                new PizzaToppingDataModel { Id = 2, Name = "Onions" },
                new PizzaToppingDataModel { Id = 3, Name = "Black olives" },
                new PizzaToppingDataModel { Id = 4, Name = "Mushrooms" },
                new PizzaToppingDataModel { Id = 5, Name = "Pineapple" },
                new PizzaToppingDataModel { Id = 6, Name = "Extra cheese" }
                );

            modelBuilder.Entity<PizzaDataModel>().HasData(
                new PizzaDataModel
                {
                    Id = 1,
                    Name = "Sicilian Pizza",
                    ImageFileName = "sicilian.jpg",
                    Description = "A classic Italian square-shaped pizza.",
                    Slug = "sicilian"
                },
                new PizzaDataModel
                {
                    Id = 2,
                    Name = "Capriciossa Pizza",
                    ImageFileName = "capri.jpg",
                    Description = "An Italian favorite featuring a thin crust.",
                    Slug = "capri"
                },
                new PizzaDataModel
                {
                    Id = 3,
                    Name = "New York-Style Pizza",
                    ImageFileName = "newyork.jpg",
                    Description = "Iconic for its large, foldable slices, this pizza style has a thin, chewy crust.",
                    Slug = "newyork"
                },
                new PizzaDataModel
                {
                    Id = 4,
                    Name = "Pepperoni Pizza",
                    ImageFileName = "pepperoni.jpg",
                    Description = "A beloved classic with a thin or thick crust.",
                    Slug = "pepperoni"
                },
                new PizzaDataModel
                {
                    Id = 5,
                    Name = "Marinara Pizza",
                    ImageFileName = "marinara.jpg",
                    Description = "A simple yet flavorful pizza featuring a thin crust.",
                    Slug = "marinara"
                },
                new PizzaDataModel
                {
                    Id = 6,
                    Name = "Margherita Pizza",
                    ImageFileName = "margherita.jpg",
                    Description = "A timeless Italian pizza, known for its simplicity.",
                    Slug = "margherita"
                },
                new PizzaDataModel
                {
                    Id = 7,
                    Name = "Caprese Pizza",
                    ImageFileName = "caprese.jpg",
                    Description = "Italian pizza that is traditionally topped with cherry tomatoes.",
                    Slug = "caprese"
                },

                new PizzaDataModel
                {
                    Id = 8,
                    Name = "Calzone Pizza",
                    ImageFileName = "calzone.jpg",
                    Description = "This unique type of pizza is characterized by its half-round shape, made by folding a full-sized pizza in half.",
                    Slug = "calzone"
                },
                 new PizzaDataModel
                 {
                     Id = 9,
                     Name = "Napoletana Pizza",
                     ImageFileName = "napoletana.jpg",
                     Description = "Italy’s most emblematic culinary creation, made with tomatoes and mozzarella cheese.",
                     Slug = "napoletana"
                 }

                );
        }

    }
}
