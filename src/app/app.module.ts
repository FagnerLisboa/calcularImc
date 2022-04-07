import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyMaskModule } from "ngx-currency-mask";
import { AppComponent } from './app.component';
import { CalculadoraImcComponent } from './calculadora-imc/calculadora-imc.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraImcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
