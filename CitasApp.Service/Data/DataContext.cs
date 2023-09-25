
using CitasApp.Service.Entities;
using Microsoft.EntityFrameworkCore;

namespace CitasApp.Service.Data;
public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
        public DbSet<AppUser> Users { get; set;}
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    }

}
