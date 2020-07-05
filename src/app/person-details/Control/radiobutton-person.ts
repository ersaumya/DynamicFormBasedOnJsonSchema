import { Base } from '../Model/base';

export class RadiobuttonPerson extends Base<string> {
  controlType = 'radiobutton';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
