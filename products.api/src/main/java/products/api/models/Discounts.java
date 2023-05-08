package products.api.models;

import java.io.Serializable;

public class Discounts implements Serializable{
  public float percent;

  public Discounts(int percent){
    super();
    this.percent = percent;
  }

  public int getDiscount(){
    return percent;
  }

  public void setDiscount(float percent){
    this.percent = percent;
  }
}
