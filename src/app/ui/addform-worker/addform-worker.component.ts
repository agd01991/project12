import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
  name: string;
  surname: string;
  type = 0;
  myWorkerType = MyWorkerType;
  @Output() addWorker = new EventEmitter<MyWorker>();
  constructor() { }
  ngOnInit(): void {
  }
  AddWorkerFieldCheck() {
    console.log(this.name)
    if (this.name === undefined || this.surname === undefined) {
      alert("Фамилия или имя работника не отсутствует!");
    } else {
      let worker: MyWorker = {
        name: this.name,
        surname: this.surname,
        type: this.type
      }
      this.addWorker.emit(worker);
    }
  }
}
