import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { timeout } from 'rxjs/operator/timeout';
import { PainelComponent } from '../painel/painel.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html' ,
    providers: [PainelComponent]
})
export class ListagemComponent { 

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: String = '';

    constructor(service: FotoService, painel: PainelComponent) {

        this.service = service;

        service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }

    remover(foto: FotoComponent, painel: PainelComponent): void{

        this.service.remover(foto)
            .subscribe( () => {

                painel.fadeOut(() => {
                  
                    let novaFotos = this.fotos.slice(0)
                    let indiceFotoApagada = this.fotos.indexOf(foto);
                    novaFotos.splice(indiceFotoApagada, 1);
                    this.fotos = novaFotos;
                    this.mensagem = "Foto apagada com Sucesso";
                    
                    setTimeout(() => {
                        this.mensagem = "";
                    }, 2000);
    
                });
            },erro => {
             console.log(erro);
              this.mensagem = "Não foi possível remover a foto."
            }
    
            )

    }

}