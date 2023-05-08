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
public class Discount implements Serializable{

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(length = 2,nullable = false)
  private int percent;

}
