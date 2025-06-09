using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Api_Armazenamento_Documentos.Models
{
    public class Reports
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("editados")]
        public string? Edited { get; set; } = null!;
        [BsonElement("excluidos")]
        public string? Deleted { get; set; } = null!;
        [BsonElement("data")]
        public string? Date { get; set; } = null!;
    }
}