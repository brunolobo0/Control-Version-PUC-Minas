using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Api_Armazenamento_Documentos.Models
{
    public class Users
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("name")]
        public string? Name { get; set; } = null!;
        [BsonElement("email")]
        public string? Email { get; set; } = null!;
        [BsonElement("password")]
        public string? Password { get; set; } = null!;
        [BsonElement("roles")]
        public string? Roles { get; set; } = null!;
    }
}
