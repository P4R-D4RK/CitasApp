using CitasApp.Service.Entities;

namespace CitasApp.Service.Interfaces;
public interface ITokenService
{
    string CreateToken(AppUser user);
}
