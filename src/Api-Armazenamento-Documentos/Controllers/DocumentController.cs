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
        private readonly DocService _docService;

        public DocumentController(DocService docService)
        {
            _docService = docService;
        }

        [HttpGet]
        public async Task<List<Document>> Get() =>
            await _docService.GetAsync();

        [HttpGet("{Id:length(24)}")]
        public async Task<ActionResult<Document>> Get(string id)
        {
            var document = await _docService.GetAsync(id);
            if (document == null)
            {
                return NotFound();
            }
            return document;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Document newDocuments)
        {
            await _docService.CreateAsync(newDocuments);

            return CreatedAtAction(nameof(Get), new { id = newDocuments.Id }, newDocuments);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id,Document updateDocument)
        {
            var document = await _docService.GetAsync(id);
            if (document is null)
                return NotFound();
            updateDocument.Id = document.Id;
            await _docService.UpdateAsync(id,updateDocument);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var document = await _docService.GetAsync(id);
            if (document is null)
                return NotFound();
            await _docService.DeleteAsync(id);
            return NoContent();
        }
    }

}
