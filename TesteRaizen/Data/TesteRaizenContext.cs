using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TesteRaizen.Models;

namespace TesteRaizen.Data
{
    public class TesteRaizenContext : DbContext
    {
        public TesteRaizenContext (DbContextOptions<TesteRaizenContext> options)
            : base(options)
        {
        }

        public DbSet<TesteRaizen.Models.Cliente> Cliente { get; set; } = default!;
    }
}
