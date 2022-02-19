interface ProdutContract {
  Name: string;
  Price: number;
  Qty: number;
  Total(): number;
  print(): void;
}
interface categoryContract {
  CategoryName: string;
}
abstract class ProductTemplate implements ProdutContract, categoryContract {
  public Name: string = "";
  public Price: number = 0;
  public Qty: number = 0;
  public CategoryName: string = "";
  public abstract Total(): number;
  public abstract print(): void;
}
class ProductComponent extends ProductTemplate {
  Name = "LCD TV";
  Price = 45000;
  Qty = 2;
  Total() {
    return this.Qty * this.Price;
  }
  public print(): void {
    console.log(
      `Name=${this.Name}\nPrice=${this.Price}\nQty=${
        this.Qty
      }\nTotal=${this.Total()} `
    );
  }
}

let tv: ProductComponent = new ProductComponent();
tv.print();
console.log(`heloo new code`);
