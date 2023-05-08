package products.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import products.api.models.Product;
import products.api.services.ProductService;

@RestController
@RequestMapping("/products")
public class ListController {

  private final ProductService productService;

  public ListController(ProductService productService){
    this.productService = productService;
  }

  @GetMapping
  public @ResponseBody Iterable<Product> list(){
    return productService.list();
  }
   
}
