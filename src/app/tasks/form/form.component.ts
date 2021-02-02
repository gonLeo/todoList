import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  meuCodigo!: number;
  constructor(
    private routerActive: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe(data => {
      this.meuCodigo = data.id;
    });
  }

}
