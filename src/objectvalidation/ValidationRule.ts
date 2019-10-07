import {TextTemplateProcessor} from "../textprocessing/TextTemplateProcessor";

export abstract class ValidationRule {
    abstract getErrorTextTemplate() :string;

    abstract isValid(value:any): boolean;

    getErrorText(textProcessor: TextTemplateProcessor, args?: any): string {
        //todo how do we combine this? we need some text to i18n text here? or do we output some data?
        var object: any = {};
        for (let arg in args) {
            object[arg] = args[arg];
        }
        this.addValidationRuleTextArguments(object);
        return textProcessor.processText(this.getErrorTextTemplate(),object);
    }

    protected addValidationRuleTextArguments(object: any) {

    }
}