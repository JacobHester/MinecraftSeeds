﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MinecraftSeeds.data;

namespace MinecraftSeeds.Migrations
{
    [DbContext(typeof(MineCraftSeedContext))]
    [Migration("20190718174515_ImageBinary2")]
    partial class ImageBinary2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MinecraftSeeds.data.image", b =>
                {
                    b.Property<int>("ImageId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ImageCaption");

                    b.Property<string>("ImageName");

                    b.HasKey("ImageId");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("MinecraftSeeds.data.seed", b =>
                {
                    b.Property<int>("SeedID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<byte[]>("Image")
                        .HasColumnType("varBinary(max)");

                    b.Property<string>("SeedText");

                    b.Property<string>("SeedValue");

                    b.Property<string>("Title");

                    b.Property<string>("Version");

                    b.HasKey("SeedID");

                    b.ToTable("Seeds");
                });
#pragma warning restore 612, 618
        }
    }
}
