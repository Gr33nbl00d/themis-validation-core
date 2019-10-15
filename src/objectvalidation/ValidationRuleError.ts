import {ValidationRule} from "./ValidationRule";
import {TextTemplateProcessor} from "..";

export class ValidationRuleError {
    private validationRule: ValidationRule;

    constructor(validationRule: ValidationRule) {
        this.validationRule = validationRule;
    }

    getErrorText(textTemplateProcessor: TextTemplateProcessor) {
        return this.validationRule.getErrorText(textTemplateProcessor);
    }

    getValidationRule(): ValidationRule {
        return this.validationRule;
    }

}