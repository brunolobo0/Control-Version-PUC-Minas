using Api_Armazenamento_Documentos.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace Api_Armazenamento_Documentos.Service
{
    public class DocsStorageService
    {
        private readonly IMongoCollection<DocumentStorage> _documentsStorageCollection;

        public DocsStorageService(
            IOptions<DocsManagerDataBaseSettings> docsManagerDataBaseSettings)
        {
            var mongoClient = new MongoClient(
                docsManagerDataBaseSettings.Value.ConnectionStrings);
            var mongoDataBase = mongoClient.GetDatabase(
                docsManagerDataBaseSettings.Value.DataBaseName);
            _documentsStorageCollection = mongoDataBase.GetCollection<DocumentStorage>(
                docsManagerDataBaseSettings.Value.DocsCollectionDocumentStorage);
        }
        public async Task<List<DocumentStorage>> GetAsync()=> 
            await _documentsStorageCollection.Find(_=>true).ToListAsync();
        public async Task<DocumentStorage?> GetAsync(string id) =>
            await _documentsStorageCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(DocumentStorage newDocumentStorage) =>
            await _documentsStorageCollection.InsertOneAsync(newDocumentStorage);
        public async Task UpdateAsync(string id,DocumentStorage updateDocumentStorage) =>
           await _documentsStorageCollection.ReplaceOneAsync(x => x.Id == id,updateDocumentStorage);

        public async Task DeleteAsync(string id) =>
            await _documentsStorageCollection.DeleteOneAsync(x => x.Id == id);

    }
}
