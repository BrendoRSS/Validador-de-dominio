import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  testevalidacao: boolean = false
  dominio: string = '';  // Input do domínio
  infos: any = {};       // Para armazenar a resposta do servidor

  constructor(public router: Router) { }

  // Função que faz a requisição GET para obter informações do domínio
  validar() {
    const url = `https://brasilapi.com.br/api/registrobr/v1/${this.dominio}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        this.testevalidacao = true
        return response.json();
      })
      .then(data => {
        this.infos = data;  // Armazena os dados recebidos
        console.log('Informações do domínio:', this.infos);
      })
      .catch(error => {
        console.error('Erro ao buscar informações:', error);  // Exibe mais detalhes no console
      });

      console.log(this.infos)
  }

  // Funções de navegação entre páginas
  DirectionPage2() {
    this.router.navigate(['/page2']);
  }

  DirectionPage3() {
    this.router.navigate(['/page3']);
  }
}
