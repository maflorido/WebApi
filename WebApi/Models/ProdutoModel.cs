using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class ProdutoModel
    {
        public ProdutoModel(long id, string nome, double valor)
        {
            this.Id = id;
            this.Nome = nome;
            this.Valor = valor;
        }

        public long Id { get; set; }

        public string Nome { get; set; }

        public double Valor { get; set; }
    }
}