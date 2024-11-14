import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmeService } from '../model/filme.service';
import { Filme } from '../model/filme';

@Component({
  selector: 'app-busca-filme',
  templateUrl: './busca-filme.component.html',
  styleUrl: './busca-filme.component.css'
})
export class BuscaFilmeComponent {
  formBusca: FormGroup
  filme: Filme | undefined 
  constructor(private fb: FormBuilder, 
              private fs: FilmeService
  ) {
    this.formBusca = this.fb.group({
      titulo: ['', [Validators.required, 
                    Validators.minLength(2)]
              ]
    })

    this.filme = undefined
  }
  buscar() {
    const titulo = this.formBusca.value.titulo
    this.fs.buscarFilmePorTitulo(titulo).subscribe(
      res => {
        this.filme = res
      }
    )
  }
}
