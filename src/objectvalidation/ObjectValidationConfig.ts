import {ValidationEntry} from "./ValidationEntry";
import {MatchEverythingFilter} from "../scopefilter/MatchEverythingFilter";
import {ValidationScopeFilter} from "../scopefilter/ValidationScopeFilter";
import {FieldScopeFilter} from "../scopefilter/FieldScopeFilter";
import {ValueRetriever} from "../valueretriever/ValueRetriever";
import {Validator} from "./Validator";
import {ValidatorError} from "./ValidationError";
import {ValidationRuleFilter} from "./ValidationRuleFilter";


export class ObjectValidationConfig {


    public validationEntries: Array<ValidationEntry>;

    constructor(validationEntries?) {
        if (validationEntries)
            this.validationEntries = validationEntries;
        else
            this.validationEntries = [];

    }

    isInvalid(valueRetriever: ValueRetriever, validationScopeFilter?: ValidationScopeFilter,validationRuleFilter?:ValidationRuleFilter): boolean {
        if (!validationScopeFilter) {
            validationScopeFilter = new MatchEverythingFilter();
        }
        let filteredValidations = validationScopeFilter.getValidationEntries(this);
        for (let v = 0; v < filteredValidations.validationEntries.length; v++) {
            if (filteredValidations.validationEntries[v].isInvalid(valueRetriever,validationRuleFilter))
                return true;
        }
        return false;
    }

    addValidator(validator: Validator, metadata?: any) {
        this.validationEntries.push(new ValidationEntry(validator, metadata));
    }

    getErrors(valueRetriever: ValueRetriever, validationScopeFilter?: ValidationScopeFilter,validationRuleFilter?:ValidationRuleFilter): Array<ValidatorError> {
        var validationErrors: Array<ValidatorError> = [];
        if (!validationScopeFilter) {
            validationScopeFilter = new MatchEverythingFilter();
        }
        let filteredValidations = validationScopeFilter.getValidationEntries(this);
        for (let v = 0; v < filteredValidations.validationEntries.length; v++) {
            let validationEntry = filteredValidations.validationEntries[v];
            if (validationEntry.isInvalid(valueRetriever,validationRuleFilter))
                validationErrors.push(validationEntry.getValidationErrors(valueRetriever,validationRuleFilter))
        }
        return validationErrors;
    }

}
