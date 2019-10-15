import {ValidationRule} from "./ValidationRule";
import {TextTemplateProcessor} from "..";
import {ValidationRuleError} from "./ValidationRuleError";

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


    getMetadata(key: string): any {
        return this.metadata[key];
    }
}
