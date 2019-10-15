import {ValidationRule} from "./ValidationRule";
import {ValidationRuleFilter} from "./ValidationRuleFilter";
import {ValidationRuleError} from "./ValidationRuleError";

export class Validator {
    private i18nextNamespace: string;
    protected validationRules: Array<ValidationRule> = [];

    constructor(validationRules?: Array<ValidationRule>) {
        this.i18nextNamespace = "ui";
        if (validationRules) {
            for (const validationRule of validationRules) {
                this.validationRules.push(validationRule);
            }
        }
    }

    addValidationRule(rule: ValidationRule) {
        this.validationRules.push(rule);
    }

    getValidationRules(): Array<ValidationRule> {
        return this.validationRules;
    }

    isInvalid(value: any, validationRuleFilter?: ValidationRuleFilter) {
        for (let r = 0; r < this.validationRules.length; r++) {
            let validationRule = this.validationRules[r];
            if (validationRuleFilter && validationRuleFilter.isAcceptedRule(validationRule) == false) {
                continue;
            }
            if (validationRule.isValid(value) == false)
                return true;

        }
        return false;
    }

    getValidationErrors(value: any, validationRuleFilter?: ValidationRuleFilter): Array<ValidationRuleError> {
        var validationRuleErrors = [];
        for (let r = 0; r < this.validationRules.length; r++) {
            let validationRule = this.validationRules[r];
            if (validationRuleFilter && validationRuleFilter.isAcceptedRule(validationRule) == false) {
                continue;
            }
            if (validationRule.isValid(value) == false) {
                validationRuleErrors.push(new ValidationRuleError(validationRule));
            }
        }

        return validationRuleErrors;
    }
}