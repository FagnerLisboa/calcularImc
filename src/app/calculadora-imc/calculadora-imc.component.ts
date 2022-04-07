import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css']
})


export class CalculadoraImcComponent implements OnInit {
  public nome!: string
  public peso!: number
  public altura!: number
  public valorIMC!: string
  public resultado!: string

  constructor() { }

  ngOnInit(): void {
  }

  imc() {

    if (this.altura && this.peso) {

      const valorIMC = (this.peso / (this.altura * 2));

      if (valorIMC < 18.5) {
        this.resultado = 'abaixo do peso.';

      } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        this.resultado = 'com peso ideal, Parabéns!!!';

      } else if (valorIMC >= 25 && valorIMC <= 29.9) {
        this.resultado = 'levimente acima do peso.';

      } else if (valorIMC >= 30 && valorIMC <= 34.9) {
        this.resultado = 'com obesidade grau I.';

      } else if (valorIMC >= 35 && valorIMC <= 39.99) {
        this.valorIMC = 'com obsidade grau II.';

      } else {
        this.resultado = 'com obesidade grau III. Cuidado!!';
      }


    }
  }

} 
