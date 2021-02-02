import { Inject, Injectable, Injector } from '@angular/core';
import { ItaskView } from '../interfaces/ITaskView';
import { BaseService } from './base.service';

@Injectable({providedIn: 'root'})
export class TasksService  extends BaseService<ItaskView>{

    constructor(
        @Inject(Injector) injector : Injector
    ) { 
        super('tasks', injector)
    }  
}