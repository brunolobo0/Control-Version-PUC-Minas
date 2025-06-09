
using Api_Armazenamento_Documentos.Models;
using Api_Armazenamento_Documentos.Service;

namespace Api_Armazenamento_Documentos
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.Configure<DocsManagerDataBaseSettings>(      
                builder.Configuration.GetSection("DocsManagerDataBase"));
            builder.Services.AddSingleton<DocsStorageService>();

            builder.Services.Configure<DocsManagerDataBaseSettings>(
                builder.Configuration.GetSection("DocsManagerDataBase"));
            builder.Services.AddSingleton<DocService>();

            builder.Services.Configure<DocsManagerDataBaseSettings>(
               builder.Configuration.GetSection("DocsManagerDataBase"));
            builder.Services.AddSingleton<UsersService>();

            builder.Services.Configure<DocsManagerDataBaseSettings>(
              builder.Configuration.GetSection("DocsManagerDataBase"));
            builder.Services.AddSingleton<ReportService>();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
