using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace logic.UsersDTOs
{
    public class appUser
    {
        public Guid? UserId { get; set; }
        public string username { get; set; }
        public List<string> roles { get; set; }
        public string nombre { get; set; }
        public bool isApproved { get; set; }
        public string lastlogin { get; set; }
        public string picture { get; set; }
    }
    public class password_with_format
    {
        public Guid UserId { get; set; }
        public string Password { get; set; }
        public int PasswordFormat { get; set; }
        public string PasswordSalt { get; set; }
        public bool IsApproved { get; set; }
        public DateTime? LastLoginDate { get; set; }
        public DateTime? LastActivityDate { get; set; }
        public bool IsLockedOut { get; set; }
    }
    public class invalid_password_count_result
    {
        public string Status { get; set; }
        public bool LockedOut { get; set; }
    }

    public class rolesForUser
    {
        public Guid RoleId { get; set; }
        public string RoleName { get; set; }
        public bool isUserInRole { get; set; }
        public bool disableDelete { get; set; }
    }

    public class userRole
    {
        public Guid userId { get; set; }
        public Guid roleId { get; set; }
    }

    public class userPasswordChange
    {
        public string username { get; set; }
        public Guid userId { get; set; }
        public string actual { get; set; }
        public string nueva { get; set; }
        public string confirmacion { get; set; }
    }

    public class userGet
    {
        public Guid id { get; set; }
        public string usuario { get; set; }
        public string roles { get; set; }
        public bool aprobado { get; set; }
        public bool bloqueado { get; set; }
        public string nombre { get; set; }
        public string documento { get; set; }
        public string sexo { get; set; }
    }

    public class userUsername
    {
        public string username { get; set; }
    }

    public class userData
    {
        public int id { get; set; }
        public string user_nombre { get; set; }
        public string user_apellido { get; set; }
        public int user_tipoDocumento { get; set; }
        public int user_nroDocumento { get; set; }
        public int user_sexo { get; set; }
        public DateTime user_fechaNacimiento { get; set; }
        public int user_estadoCivil { get; set; }
        public string user_email { get; set; }
        public Guid currentUser { get; set; }
    }

    public class userResetPassword
    {
        public string username { get; set; }
        public string oa { get; set; }
        public string nombre { get; set; }
    }

    public class userFromUsername
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PasswordQuestion { get; set; }
        public string Comment { get; set; }
        public bool IsApproved { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? LastLoginDate { get; set; }
        public DateTime? LastActivityDate { get; set; }
        public DateTime? LastPasswordChangedDate { get; set; }
        public Guid UserId { get; set; }
        public bool IsLockedOut { get; set; }
        public DateTime? LastLockoutDate { get; set; }
    }

    public class userUserId
    {
        public Guid UserId { get; set; }
    }

    public class userApprove
    {
        public Guid userid { get; set; }
        public bool approve { get; set; }
    }

    public class roleSetResult
    {
        public string Status { get; set; }
        public string Message { get; set; }
        public Guid? ReturnId { get; set; }
    }

    public class roleSet
    {
        public string RoleName { get; set; }
        public Guid UserId { get; set; }
    }

    public class usuarioPersonQuery
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string email { get; set; }
        public int tipoDocumento { get; set; }
        public string documento { get; set; }
        public int page { get; set; }
        public int pageSize { get; set; }
        public int pageUser { get; set; }
        public int pageUserSize { get; set; }
        public bool returnNoUser { get; set; }
        public bool returnUser { get; set; }
    }

    public class usuarioPersonQueryResult
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string TipoDocumento { get; set; }
        public string Documento { get; set; }
        public int TotalRecords { get; set; }
        public Guid? UserId { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public string Email { get; set; }
        public int PageCount { get; set; }
        public Int64 RowNumber { get; set; }
    }
}