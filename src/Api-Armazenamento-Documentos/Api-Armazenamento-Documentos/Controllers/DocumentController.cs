using Api_Armazenamento_Documentos.Models;
using Api_Armazenamento_Documentos.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_Armazenamento_Documentos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private readonly DocsService _docsService;

        public DocumentController(DocsService docsService)
        {
            _docsService = docsService;
        }

        [HttpGet]
        public async Task<List<Documents>> Get() =>
            await _docsService.GetAsync();

        [HttpGet("{Id:length(24)}")]
        public async Task<ActionResult<Documents>> Get(string id)
        {
            var document = await _docsService.GetAsync(id);
            if (document == null)
            {
                return NotFound();
            }
            return document;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Documents newDocuments)
        {
            await _docsService.CreateAsync(newDocuments);

            return CreatedAtAction(nameof(Get), new { id = newDocuments.Id }, newDocuments);
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var document = await _docsService.GetAsync(id);
            if (document is null)
                return NotFound();
            await _docsService.DeleteAsync(id);
            return NoContent(); 
        }
    }
}
