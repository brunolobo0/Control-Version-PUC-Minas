using Api_Armazenamento_Documentos.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace Api_Armazenamento_Documentos.Service
{
    public class DocsService
    {
        private readonly IMongoCollection<DocumentStorage> _documentsCollection;

        public DocsService(
            IOptions<DocsManagerDataBaseSettings> docsManagerDataBaseSettings)
        {
            var mongoClient = new MongoClient(
                docsManagerDataBaseSettings.Value.ConnectionStrings);
            var mongoDataBase = mongoClient.GetDatabase(
                docsManagerDataBaseSettings.Value.DataBaseName);
            _documentsCollection = mongoDataBase.GetCollection<DocumentStorage>(
                docsManagerDataBaseSettings.Value.DocsCollectionName);
        }
        public async Task<List<DocumentStorage>> GetAsync()=> 
            await _documentsCollection.Find(_=>true).ToListAsync();
        public async Task<DocumentStorage?> GetAsync(string id) =>
            await _documentsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(DocumentStorage newDocuments) =>
            await _documentsCollection.InsertOneAsync(newDocuments);
        public async Task UpdateAsync(string id,DocumentStorage updateDocuments) =>
           await _documentsCollection.ReplaceOneAsync(x => x.Id == id,updateDocuments);

        public async Task DeleteAsync(string id) =>
            await _documentsCollection.DeleteOneAsync(x => x.Id == id);

    }
}
