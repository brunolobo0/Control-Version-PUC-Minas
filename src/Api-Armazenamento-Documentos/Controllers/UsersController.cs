using Api_Armazenamento_Documentos.Models;
using Api_Armazenamento_Documentos.Service;
using Microsoft.AspNetCore.Mvc;

namespace Api_Armazenamento_Documentos.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UsersService _usersService;
        public UsersController(UsersService usersService)
        {
            _usersService = usersService;
        }
        [HttpGet]
        public async Task<List<Users>> Get() =>
            await _usersService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Users>> Get(string id)
        {
            var user = await _usersService.GetAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Users newUser)
        {
            await _usersService.CreateAsync(newUser);
            return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Users updateUser)
        {
            var user = await _usersService.GetAsync(id);
            if (user == null)
                return NotFound();
            updateUser.Id = user.Id;
            await _usersService.UpdateAsync(id, updateUser);
            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _usersService.GetAsync(id);
            if (user == null)
                return NotFound();
            await _usersService.RemoveAsync(id);
            return NoContent();
        }
    }
}