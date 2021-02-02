import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItaskView } from 'src/app/shared/interfaces/ITaskView';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  tasks: ItaskView[] = [];  

  constructor(
    private taskSrv : TasksService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }  

  async loadData(){
    this.tasks = await this.taskSrv.GetAll();
  }

  

}
