package products.api.models;

import java.io.Serializable;

public class Product implements Serializable{
  public Long id;
  public String name;
  public String description;
  public String price;

  public Product(Long id, String name, String description, String price){
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  public Long getId(){
    return id;
  }

  public String getName(){
    return name;
  }

  public String getDescription(){
    return description;
  }

  public String getPrice(){
    return price;
  }

  public void setName(String name){
    this.name = name;
  }

  public void setDescription(String description){
    this.description = description;
  }

  public void setPrice(String price){
    this.price = price;
  }

}
