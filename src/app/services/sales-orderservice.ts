import { Injectable } from "@angular/core";
import { Workbook, Cell } from "exceljs";
import { Observable, of } from "rxjs";
import { SalesOrder } from "../models/SalesOrder";
import { ApiService } from "./api.service";
@Injectable({
  providedIn: "root"
})
export class SalesOrderService {
  private selectedRows: SalesOrder[] = [];

  constructor(private api: ApiService) {}
  readExcelFile(file: File): Observable<any> {
    const workbook = new Workbook();
    const objs: SalesOrder[] = [];
    const arrayBuffer = new Response(file).arrayBuffer();
    var obj = this;
    arrayBuffer.then(data => {
      workbook.xlsx.load(data).then(() => {
        // udpate value to SaleOrder array
        const worksheet = workbook.getWorksheet(1);
        worksheet.eachRow(function(row, rowNumber) {
          if (rowNumber > 1) {
            var order = new SalesOrder();
            order.No = Number(obj.ExtractValueFromCell(row.getCell(2)));
            order.Plant = obj.ExtractValueFromCell(row.getCell(3)).toString();
            order.Material = obj
              .ExtractValueFromCell(row.getCell(4))
              .toString();
            order.RequestedDeliveryDate = new Date(
              obj.ExtractValueFromCell(row.getCell(5)).toString()
            );
            order.SalesDoc = obj
              .ExtractValueFromCell(row.getCell(8))
              .toString();
            order.SalesToName = obj
              .ExtractValueFromCell(row.getCell(13))
              .toString();
            order.ShipToName = obj
              .ExtractValueFromCell(row.getCell(14))
              .toString();
            objs.push(order);
          }
        });
      });
    });
    return of(objs);
  }

  isExcelFile(name: string) {
    let ext = name.substr(
      name.lastIndexOf(".") + 1,
      name.length - name.lastIndexOf(".")
    );
    if (
      ext != null &&
      ext != "" &&
      (ext.toLocaleLowerCase() == "xls" || ext.toLocaleLowerCase() == "xlsx")
    ) {
      return true;
    }
    return false;
  }

  addRow(row) {
    this.selectedRows.push(row);
    console.log(this.selectedRows);
  }

  deleteRow(index) {
    let i: number = 0;
    for (i = 0; i < this.selectedRows.length; i++) {
      if (this.selectedRows[i].index == index) {
        this.selectedRows.splice(i, 1);
        break;
      }
    }
    console.log(this.selectedRows);
  }

  saveRows() {
    var body = JSON.stringify(this.selectedRows);
    this.api.save(body, "SalesOrder/Orders").subscribe(
      x => console.log(x),
      err => console.log("err", err)
    );
  }

  private ExtractValueFromCell(cell: Cell) {
    if (cell.formula == undefined) {
      return cell.value;
    } else {
      return cell.result;
    }
  }
}
