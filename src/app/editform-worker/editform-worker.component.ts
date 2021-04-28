import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyWorkerType, MyWorker } from '../shared/worker.model';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {
  id: number;
  name: string;
  surname: string;
  type = 0;
  myWorkerType = MyWorkerType;
  @Output() editWorker = new EventEmitter<MyWorker>();
  @Output() editById = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void {
  }

  EditWorker(id: number) {
    let worker: MyWorker = {
      id: id,
      name: this.name,
      surname: this.surname,
      type: this.type
    }
    this.editWorker.emit(worker);
  }
}
