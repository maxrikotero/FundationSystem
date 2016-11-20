CREATE TABLE [dbo].[Pacientes] (
    [Id]              INT           IDENTITY (1, 1) NOT NULL,
    [Nombre]          VARCHAR (700) NOT NULL,
    [Apellido]        VARCHAR (700) NOT NULL,
    [Dni]             VARCHAR (50)  NULL,
    [FechaNacimiento] DATETIME2 (7) NULL,
    [FechaIngreso]    DATETIME2 (7) NULL,
    CONSTRAINT [PK_Pacientes] PRIMARY KEY CLUSTERED ([Id] ASC)
);

