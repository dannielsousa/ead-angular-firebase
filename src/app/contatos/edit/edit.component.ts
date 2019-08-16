import { ContatoDataService } from './../shared/contato-data.service';
import { ContatoService } from './../shared/contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from '../shared/contato';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  contato: Contato;
  key: string = '';


  constructor(
    private contatoService: ContatoService,
    private contatoDataService: ContatoDataService
  ) { }

  ngOnInit() {
    this.contato = new Contato();
  }

  onSubmit() {
    if (this.key) {

    } else {
      this.contatoService.insert(this.contato);
    }

    this.contato = new Contato();
  }


}
