using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Api_Armazenamento_Documentos.Models
{
    public class Documents
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("titulo")]
        public string Title { get; set; } = null!;

        [BsonElement("conteudo")]
        public string Content { get; set; } = null!;

        [BsonElement("tipo_arquivo")]
        public string TypeFile { get; set; } = null!;

        [BsonElement("data_criacao")]
        public string CreationDate { get; set; } = null!;
    }
}