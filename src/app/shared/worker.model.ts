export interface MyWorker {
  name: string;
  surname: string;
  type: number;
  id?: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let myWorkerDatabase: MyWorker[] = [
  { id: 0, name: 'Александр', surname: 'Цалапов', type: 0 },
  { id: 1, name: 'Дмитрий', surname: 'Комков', type: 1 },
  { id: 2, name: 'Сунгур', surname: 'Гасанов', type: 2 },
  { id: 3, name: 'Руфина', surname: 'Гатаулина', type: 3 }
]
