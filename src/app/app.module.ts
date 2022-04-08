import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCurrencyModule } from 'ngx-currency';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { CalculadoraImcComponent } from './calculadora-imc/calculadora-imc.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

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
    NgxCurrencyModule,
    NgxMaskModule.forRoot(maskConfig),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
