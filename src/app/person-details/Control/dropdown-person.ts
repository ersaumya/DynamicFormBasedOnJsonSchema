import { Base } from '../Model/base';

export class DropdownPerson extends Base<string> {
  controlType = 'dropdown';
  options:{key:string,value:string}[]=[];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
