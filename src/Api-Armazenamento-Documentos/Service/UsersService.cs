using Api_Armazenamento_Documentos.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Api_Armazenamento_Documentos.Service
{
    public class UsersService
    {
        private readonly IMongoCollection<Users> _userscollection;
        public UsersService(
            IOptions<DocsManagerDataBaseSettings> docsManagerDataBaseSettings)
        {
            var mongoClient = new MongoClient(
                docsManagerDataBaseSettings.Value.ConnectionStrings);
            var mongoDatabase = mongoClient.GetDatabase(
                docsManagerDataBaseSettings.Value.DataBaseName);
            _userscollection = mongoDatabase.GetCollection<Users>(
                docsManagerDataBaseSettings.Value.DocsCollectionUsers);
        }
        public async Task<List<Users>> GetAsync() =>
            await _userscollection.Find(_ => true).ToListAsync();
        public async Task<Users?> GetAsync(string id) =>
            await _userscollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Users newUsers) =>
            await _userscollection.InsertOneAsync(newUsers);
        public async Task UpdateAsync(string id, Users updateUsers) =>
            await _userscollection.ReplaceOneAsync(x => x.Id == id, updateUsers);
        public async Task RemoveAsync(string id) =>
            await _userscollection.DeleteOneAsync(x => x.Id == id);
    }
}
