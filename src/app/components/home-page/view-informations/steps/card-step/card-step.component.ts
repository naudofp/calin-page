import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-step',
  templateUrl: './card-step.component.html',
  styleUrls: ['./card-step.component.css']
})
export class CardStepComponent implements OnInit {

  @Input()
  textCard: String = "Nenhum Conteúdo Recebido";

  constructor() { }

  ngOnInit(): void {
  }

}
