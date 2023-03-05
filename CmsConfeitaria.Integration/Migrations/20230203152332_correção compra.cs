using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CmsConfeitaria.Integration.Migrations
{
    /// <inheritdoc />
    public partial class correçãocompra : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UnidadeMedidaId",
                table: "Compra",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Compra_UnidadeMedidaId",
                table: "Compra",
                column: "UnidadeMedidaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Compra_UnidadeMedida_UnidadeMedidaId",
                table: "Compra",
                column: "UnidadeMedidaId",
                principalTable: "UnidadeMedida",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Compra_UnidadeMedida_UnidadeMedidaId",
                table: "Compra");

            migrationBuilder.DropIndex(
                name: "IX_Compra_UnidadeMedidaId",
                table: "Compra");

            migrationBuilder.DropColumn(
                name: "UnidadeMedidaId",
                table: "Compra");
        }
    }
}
