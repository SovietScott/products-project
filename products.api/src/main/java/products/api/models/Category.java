package products.api.models;

import java.io.Serializable;

public class Category implements Serializable{
  private Long id;
  private String name;

  public Category(Long id,String name){
    super();
    this.id = id;
    this.name = name;
  }

  public Long getId(){
    return id;
  }

  public String getName(){
    return name;
  }

  public void setId(Long id){
    this.id = id;
  }

  public void setName(String name){
    this.name = name;
  }

}
