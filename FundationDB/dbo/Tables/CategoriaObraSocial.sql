CREATE TABLE [dbo].[CategoriaObraSocial] (
    [Id]     INT           IDENTITY (1, 1) NOT NULL,
    [Nombre] VARCHAR (100) NOT NULL,
    CONSTRAINT [PK_CategoriaObraSocial] PRIMARY KEY CLUSTERED ([Id] ASC)
);

