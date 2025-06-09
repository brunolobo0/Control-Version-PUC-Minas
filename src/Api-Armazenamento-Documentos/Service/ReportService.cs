using Api_Armazenamento_Documentos.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Api_Armazenamento_Documentos.Service
{
        public class ReportService
        {
            private readonly IMongoCollection<Reports> _reportsCollection;

            public ReportService(
                IOptions<DocsManagerDataBaseSettings> docsManagerDataBaseSettings)
            {
                var mongoClient = new MongoClient(
                    docsManagerDataBaseSettings.Value.ConnectionStrings);
                var mongoDataBase = mongoClient.GetDatabase(
                    docsManagerDataBaseSettings.Value.DataBaseName);
                _reportsCollection = mongoDataBase.GetCollection<Reports>(
                    docsManagerDataBaseSettings.Value.DocsCollectionReports);
            }
            public async Task<List<Reports>> GetAsync() =>
                await _reportsCollection.Find(_ => true).ToListAsync();
            public async Task<Reports?> GetAsync(string id) =>
                await _reportsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
            public async Task CreateAsync(Reports newDocumentStorage) =>
                await _reportsCollection.InsertOneAsync(newDocumentStorage);
        }
}
