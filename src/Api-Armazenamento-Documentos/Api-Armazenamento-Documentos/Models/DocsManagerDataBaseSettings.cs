namespace Api_Armazenamento_Documentos.Models
{
    public class DocsManagerDataBaseSettings
    {
        public string ConnectionStrings { get; set; } = null!;
        public string DataBaseName { get; set; } = null!;
        public string DocsCollectionName { get; set; } = null!;

    }
}
