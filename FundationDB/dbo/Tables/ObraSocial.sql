CREATE TABLE [dbo].[ObraSocial] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [Nombre]      VARCHAR (100) NOT NULL,
    [IdCategoria] INT           NOT NULL,
    CONSTRAINT [PK_ObraSocial] PRIMARY KEY CLUSTERED ([Id] ASC, [IdCategoria] ASC),
    CONSTRAINT [FK_ObraSocial_CategoriaObraSocial] FOREIGN KEY ([IdCategoria]) REFERENCES [dbo].[CategoriaObraSocial] ([Id])
);

