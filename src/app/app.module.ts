import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ViewChild } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import { MaterialComponent } from "./material/material.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./material/material-module";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { ReactformComponent } from './reactform/reactform.component';

@NgModule({
  declarations: [AppComponent, MaterialComponent, ReactformComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
