using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Account
    {   
        public string Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string[] Roles { get; set; }
        public string ImageURL { get; set; }
        public string GoogleId { get; set; }
    }
}