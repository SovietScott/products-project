package products.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import products.api.models.Product;

@Repository // JpaRepository<Entidade, Tipo de Id>
public interface ProductRepository extends JpaRepository<Product, Long> {
  
}
