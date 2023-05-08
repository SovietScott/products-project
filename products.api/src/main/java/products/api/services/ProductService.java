package products.api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import products.api.models.Product;
import products.api.repository.ProductRepository;

@Service
public class ProductService {
  
  private final ProductRepository productRepository;

  public ProductService(ProductRepository productRepository){
    this.productRepository = productRepository;
  };

  public Iterable<Product> list(){
    return productRepository.findAll();
  }

  public Product save(Product product){
    return productRepository.save(product);
  }

  public Iterable<Product> save(List<Product> products){
    return productRepository.saveAll(products);
  }
  
}
