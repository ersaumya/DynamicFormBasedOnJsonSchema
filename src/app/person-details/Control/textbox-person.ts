import { Base } from '../Model/base';

export class TextboxPerson extends Base<string>{
    controlType='textbox';
    type:string;

    constructor(options:{}={}){
        super(options);
        this.type=options['type'] || '';
    }
}