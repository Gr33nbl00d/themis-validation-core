import {ValidationRule} from "./ValidationRule";

export class ValidationRuleError {
    validationRule:ValidationRule;

    constructor(validationRule: ValidationRule) {
        this.validationRule = validationRule;
    }
}

export class ValidatorError {
    metadata: any;
    validationRuleErrors:Array<ValidationRuleError>=[];

    constructor(metadata: any, validationRuleErrors: Array<ValidationRuleError>) {
        this.metadata = metadata;
        this.validationRuleErrors = validationRuleErrors;

    }
}
