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

export class ValidatorError {
    private metadata: any;
    private validationRuleErrors: Array<ValidationRuleError> = [];

    constructor(metadata: any, validationRuleErrors: Array<ValidationRuleError>) {
        this.metadata = metadata;
        this.validationRuleErrors = validationRuleErrors;

    }

    getRuleErrors(): Array<ValidationRuleError> {
        return this.validationRuleErrors;
    }

    getFirstRuleError(): ValidationRuleError {
        if (this.validationRuleErrors.length > 0)
            return this.validationRuleErrors[0];
        return null;
    }

    getFirstRuleErrorText(textTemplateProcessor: TextTemplateProcessor): string {
        let firstRuleError = this.getFirstRuleError();
        if (firstRuleError)
            return firstRuleError.getErrorText(textTemplateProcessor);
    }

}
