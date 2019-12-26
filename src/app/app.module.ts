import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SalesOrderUploadComponent } from "./components/sales-order-upload/sales-order-upload.component";
import { DragdropDirective } from "./directives/dragdrop.directive";
import { SalesodertableComponent } from "./components/salesodertable/salesodertable.component";

@NgModule({
  declarations: [
    AppComponent,
    SalesOrderUploadComponent,
    DragdropDirective,
    SalesodertableComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
