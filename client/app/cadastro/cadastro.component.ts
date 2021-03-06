import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})
export class CadastroComponent { 

    foto: FotoComponent = new FotoComponent();
    service: FotoService;
    meuForm: FormGroup;
    route : ActivatedRoute;
    router: Router;
    mensagem: string = '';
    @Output() alterar = new EventEmitter();


    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            
            let id = params['id'];
            
            if(id){
                this.service.buscarPorId(id)
                .subscribe( resultadoFoto => {
                    this.foto = resultadoFoto;
                }, erro => console.log(erro));
            }

        });

        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar(event) {
        event.preventDefault();
        console.log(this.foto);

        this.service.cadastra(this.foto)
            .subscribe((resultado) => {
                this.meuForm.reset();
                this.mensagem = resultado.mensagem;
                if(!resultado.inclusao){
                    this.mensagem = resultado.mensagem;
                    console.log('não chega aq');
                    //this.router.navigate(['']);
                }
            }, erro => {
                console.log(erro);
            });
    }

    teste(){
        console.log('eae');
    }

}