using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class GroceryShopController : ApiController
    {
        public IEnumerable<ProdutoModel> produtos = new List<ProdutoModel>()
        {
            new ProdutoModel(1, "Produto 1", 50.5),
            new ProdutoModel(1, "Produto 2", 3),
            new ProdutoModel(1, "Produto 3", 10)
        } ;

        [HttpGet]
        public IEnumerable<ProdutoModel> GetAll()
        {
            return produtos;
        }
    }
}
