using CitasApp.Service.Data;
using CitasApp.Service.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace CitasApp.Service.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;

        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("Register")]
        public async Task<ActionResult<AppUser>> Register(string username, string password, string email)
        {
            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                Username = username,
                Email = email,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
                PasswordSalt = hmac.Key
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }
    }
}