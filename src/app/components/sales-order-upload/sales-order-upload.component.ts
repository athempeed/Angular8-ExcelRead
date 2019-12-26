import { Component, OnInit } from "@angular/core";
import { SalesOrderService } from "../../services/sales-orderservice";
import { SalesOrder } from "src/app/models/SalesOrder";
@Component({
  selector: "app-sales-order-upload",
  templateUrl: "./sales-order-upload.component.html",
  styleUrls: ["./sales-order-upload.component.css"]
})
export class SalesOrderUploadComponent implements OnInit {
  filename: string = "no file choosen.";
  rows: SalesOrder[];

  constructor(private service: SalesOrderService) {}

  uploadFile(event) {
    const element = event[0];
    if (this.service.isExcelFile(element.name)) {
      this.service.readExcelFile(element).subscribe(x => {
        this.rows = x;
      });
      this.filename = element.name;
    } else {
      alert("only excel files are allowed");
    }
  }

  ngOnInit() {}
}
