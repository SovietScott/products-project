package products.api.models;

import java.io.Serializable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data // Implementa Getters, Setters, ToString e Hashcodes
@Entity // Especifica a classe como Entidade mapeada no banco de dados
public class Product implements Serializable{

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  public Long id;

  @Column(length = 50, nullable = false)
  public String name;

  @Column(length = 200, nullable = true)
  public String description;

  @Column(length = 6, nullable = false)
  public String price;

  /*@Column(nullable = true)
  @OneToMany(mappedBy = "Category", fetch = FetchType.LAZY, orphanRemoval = false)
  private List<Category> listCategory;*/

}
