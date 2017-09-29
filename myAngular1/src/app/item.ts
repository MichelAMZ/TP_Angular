export class Item {
  // les propriétés
  name: string;
  reference: string;
  state: number;

  // tslint:disable-next-line:one-line
  constructor(data){
    this.name = data.name;
    this.reference = data.reference;
    this.state = data.state;
  }
}
