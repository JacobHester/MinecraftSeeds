using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MinecraftSeeds.Migrations
{
    public partial class ImageBinary2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "version",
                table: "Seeds",
                newName: "Version");

            migrationBuilder.AlterColumn<byte[]>(
                name: "Image",
                table: "Seeds",
                type: "varBinary(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Version",
                table: "Seeds",
                newName: "version");

            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "Seeds",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varBinary(max)",
                oldNullable: true);
        }
    }
}
