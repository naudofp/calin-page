import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-paymet',
  templateUrl: './paymet.component.html',
  styleUrls: ['./paymet.component.css']
})
export class PaymetComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  updateCarrosel(number: number) {
    requestAnimationFrame(() => {
      let carrossel = this.el.nativeElement.querySelector('.container-carrossel');
      let carrosselPosition = carrossel.scrollLeft + number;
  
      this.renderer.setProperty(carrossel, 'scrollLeft', carrosselPosition)
    })
  }
}
