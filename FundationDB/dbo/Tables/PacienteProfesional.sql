CREATE TABLE [dbo].[PacienteProfesional] (
    [Id]            INT IDENTITY (1, 1) NOT NULL,
    [IdPaciente]    INT NOT NULL,
    [IdProfesional] INT NOT NULL,
    CONSTRAINT [PK_PacienteProfesional] PRIMARY KEY CLUSTERED ([Id] ASC, [IdPaciente] ASC, [IdProfesional] ASC)
);

