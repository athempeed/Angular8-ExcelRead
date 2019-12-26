import { Component, Input } from "@angular/core";
import { SalesOrder } from "src/app/models/SalesOrder";
import { SalesOrderService } from "src/app/services/sales-orderservice";

@Component({
  selector: "app-salesodertable",
  templateUrl: "./salesodertable.component.html",
  styleUrls: ["./salesodertable.component.css"]
})
export class SalesodertableComponent {
  @Input() rows: SalesOrder[];
  constructor(private service: SalesOrderService) {}

  updateSelected(event, i) {
    if (event != null && event.srcElement.checked) {
      var val = this.rows[i];
      val.index = i;
      this.service.addRow(val);
    } else {
      this.service.deleteRow(i);
    }
  }

  saveRows() {
    this.service.saveRows();
  }
}
