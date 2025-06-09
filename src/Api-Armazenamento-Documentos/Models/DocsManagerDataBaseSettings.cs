namespace Api_Armazenamento_Documentos.Models
{
    public class DocsManagerDataBaseSettings
    {
        public string ConnectionStrings { get; set; } = null!;
        public string DataBaseName { get; set; } = null!;
        public string DocsCollectionDocumentStorage { get; set; } = null!;
        public string DocsCollectionDocument { get; set; } = null!;
        public string DocsCollectionUsers { get; set; } = null!;
        public string DocsCollectionReports { get; set; } = null!;

    }
}
