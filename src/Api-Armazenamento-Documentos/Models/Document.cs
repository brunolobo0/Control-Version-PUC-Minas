using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Api_Armazenamento_Documentos.Models
{
    public class Document
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("titulo")]
        public string Title { get; set; } = null!;

        [BsonElement("conteudo")]
        public string Content { get; set; } = null!;

        [BsonElement("proprietario")]
        public string Owner { get; set; } = null!;

        [BsonElement("tipo_documento")]
        public string TypeDocs { get; set; } = null!;

        [BsonElement("data_criacao")]
        public string CreationDate { get; set; } = null!;

        [BsonElement("data_atualizacao")]
        public string UpdateDate { get; set; } = null!;
    }
}
