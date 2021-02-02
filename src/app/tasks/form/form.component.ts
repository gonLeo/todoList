import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItaskView } from 'src/app/shared/interfaces/ITaskView';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  
  taskId!: number;
  task: ItaskView;

  constructor(
    private routerActive: ActivatedRoute,
    private taskSrv: TasksService
  ) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe(({ id }) => {
      this.taskId = + id;
    });
  }

  async loadData(){
    const { success, data} = await this.taskSrv.GetById(this.taskId);
    if( success ){
      this
    }
  }
  save(){
    
  }

}
