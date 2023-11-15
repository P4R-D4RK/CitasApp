
using CitasApp.Service.Data;
using CitasApp.Service.Interfaces;
using CitasApp.Service.Services;
using Microsoft.EntityFrameworkCore;

namespace CitasApp.Service.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(
        this IServiceCollection services,
        IConfiguration config)
    {
        services.AddDbContext<DataContext>(opt =>
        {
            opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
        });
        services.AddCors();
        services.AddScoped<ITokenService, TokenService>();

        return services;
    }
}