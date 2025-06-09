using Api_Armazenamento_Documentos.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Api_Armazenamento_Documentos.Service
{
    public class DocService
    {
        private readonly IMongoCollection<Document> _documentsCollection;

        public DocService(
            IOptions<DocsManagerDataBaseSettings> docsManagerDataBaseSettings)
        {
            var mongoClient = new MongoClient(
                docsManagerDataBaseSettings.Value.ConnectionStrings);
            var mongoDataBase = mongoClient.GetDatabase(
                docsManagerDataBaseSettings.Value.DataBaseName);
            _documentsCollection = mongoDataBase.GetCollection<Document>(
                docsManagerDataBaseSettings.Value.DocsCollectionDocument);
        }
        public async Task<List<Document>> GetAsync() =>
            await _documentsCollection.Find(_ => true).ToListAsync();
        public async Task<Document?> GetAsync(string id) =>
            await _documentsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Document newDocuments) =>
            await _documentsCollection.InsertOneAsync(newDocuments);
        public async Task UpdateAsync(string id, Document updateDocuments) =>
           await _documentsCollection.ReplaceOneAsync(x => x.Id == id, updateDocuments);

        public async Task DeleteAsync(string id) =>
            await _documentsCollection.DeleteOneAsync(x => x.Id == id);

    }
}

