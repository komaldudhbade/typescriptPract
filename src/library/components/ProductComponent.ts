import { ProductTemplate } from "../templates/ProductTemplate";

export class ProductComponent extends ProductTemplate {
  Name = "LCD TV";
  Price = 46000;
  Qty = 3;
  public Total(): number {
    return this.Qty * this.Price;
  }
  public Print(): void {
    console.log(
      `Name=${this.Name}\nPrice=${this.Price}\nQty=${
        this.Qty
      }\nTotal=${this.Total()}`
    );
  }
}
