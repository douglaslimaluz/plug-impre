import { Component } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent {

  ngOnInit() {
    // alert('Seja bem vindo a página Quem Somos!')

  }

  enviar() {
    alert('Você clicou no botão enviar!')
  }

  

}
