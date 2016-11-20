CREATE TABLE [dbo].[Profesionales] (
    [Id]       INT           IDENTITY (1, 1) NOT NULL,
    [Nombre]   VARCHAR (700) NOT NULL,
    [Apellido] VARCHAR (700) NOT NULL,
    [Dni]      VARCHAR (50)  NULL,
    [Cuil]     VARCHAR (50)  NULL,
    CONSTRAINT [PK_Profesionales] PRIMARY KEY CLUSTERED ([Id] ASC)
);

