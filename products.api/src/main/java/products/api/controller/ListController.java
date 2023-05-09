package products.api.controller;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import products.api.models.Product;
import products.api.services.InitDatabaseService;
import products.api.services.ProductService;

@RestController
@RequestMapping("/products")
public class ListController {

  private final ProductService productService;
  private final InitDatabaseService initDatabaseService;

  public ListController(ProductService productService, InitDatabaseService initDatabaseService) {
    this.productService = productService;
    this.initDatabaseService = initDatabaseService;
  }

  @GetMapping
  public @ResponseBody Iterable<Product> list() {
    return productService.list();
  }

  @PatchMapping
  public @ResponseBody Iterable<Product> restart(){
    productService.deleteAll();
    initDatabaseService.initDatabase(productService);
    return productService.list();
  }

  @DeleteMapping
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteAll() {
    productService.deleteAll();
  };

  @Bean
  CommandLineRunner initDb(){
    return args -> {
      initDatabaseService.initDatabase(productService);
    };
  }

}

