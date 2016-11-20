declare @p16 dbo.tvp_IMAC_TelefonoPersona
insert into @p16 values(1002,1,1,N'a',N'a',N'a',NULL,NULL,NULL,NULL,NULL,NULL,NULL,N'Personal',N'Argentina')

declare @p17 dbo.tvp_IMAC_DomicilioPersona
insert into @p17 values(NULL,1,1,1,1,1,N'a',NULL,NULL,N'a',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,N'Personal',NULL,N'Salta',NULL,N'El Tribuno')

declare @fac datetime2 = cast('1984-12-19 00:00:00' as datetime2);
exec sp_executesql N'exec usp_IMAC_Paciente_Set @Id, @apellido, @estadoCivil, @fechaNacimiento, @nombre, @nroDocumento, @sexo, @tipoDocumento, @userId, @oSocialHasChanges, @oSocial, @nAfiliado, @fechaVigencia, @telefonos',N'@Id int,@apellido nvarchar(10),@estadoCivil int,@fechaNacimiento datetime,@nombre nvarchar(11),@nroDocumento nvarchar(8),@sexo int,@tipoDocumento int,@userId uniqueidentifier,@oSocialHasChanges bit,@oSocial int,@nAfiliado nvarchar(16),@fechaVigencia datetime,@telefonos [dbo].[tvp_IMAC_TelefonoPersona] READONLY,@Domicilios [dbo].[tvp_IMAC_DomicilioPersona] READONLY',@Id=118674,@apellido=N'VILLAGRAN ',@estadoCivil=1,@fechaNacimiento=@fac,@nombre=N'JOSE DANIEL',@nroDocumento=N'31194302',@sexo=1,@tipoDocumento=1,@userId='A7F44605-4239-4E73-B49C-011C4D8E85B9',@oSocialHasChanges=0,@oSocial=29,@nAfiliado=N'20-31194302-3/00',@fechaVigencia='2020-01-01 00:00:00',@telefonos=@p16,@Domicilios=@p17