using Api_Armazenamento_Documentos.Models;
using Api_Armazenamento_Documentos.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_Armazenamento_Documentos.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class ReportsController : ControllerBase
    {
        private readonly ReportService _reportService;

        public ReportsController(ReportService reportService)
        {
            _reportService = reportService;
        }
        [HttpGet]
        public async Task<List<Reports>> Get() =>
            await _reportService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Reports>> Get(string id)
        {
            var report = await _reportService.GetAsync(id);
            if (report == null)
            {
                return NotFound();
            }
            return report;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Reports newReport)
        {
            await _reportService.CreateAsync(newReport);
            return CreatedAtAction(nameof(Get), new { id = newReport.Id }, newReport);
        }
    }
}
