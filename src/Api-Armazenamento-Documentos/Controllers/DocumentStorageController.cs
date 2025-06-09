using Api_Armazenamento_Documentos.Models;
using Api_Armazenamento_Documentos.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_Armazenamento_Documentos.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class DocumentStorageController : ControllerBase
    {
        private readonly DocsStorageService _docStorageService;

        public DocumentStorageController(DocsStorageService docsService)
        {
            _docStorageService = docsService;
        }

        [HttpGet]
        public async Task<List<DocumentStorage>> Get() =>
            await _docStorageService.GetAsync();

        [HttpGet("{Id:length(24)}")]
        public async Task<ActionResult<DocumentStorage>> Get(string id)
        {
            var documentStorage = await _docStorageService.GetAsync(id);
            if (documentStorage == null)
            {
                return NotFound();
            }
            return documentStorage;
        }

        [HttpPost]
        public async Task<IActionResult> Post(DocumentStorage newDocuments)
        {
            await _docStorageService.CreateAsync(newDocuments);

            return CreatedAtAction(nameof(Get), new { id = newDocuments.Id }, newDocuments);
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var documentStorage = await _docStorageService.GetAsync(id);
            if (documentStorage is null)
                return NotFound();
            await _docStorageService.DeleteAsync(id);
            return NoContent(); 
        }
    }
}
