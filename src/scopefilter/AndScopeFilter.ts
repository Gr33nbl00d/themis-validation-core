import {ValidationScopeFilter} from "./ValidationScopeFilter";
import {ObjectValidationConfig} from "..";

export class AndScopeFilter implements ValidationScopeFilter {
    filter1: ValidationScopeFilter;
    filter2: ValidationScopeFilter;

    constructor(filter1: ValidationScopeFilter, filter2: ValidationScopeFilter) {
        this.filter1 = filter1;
        this.filter2 = filter2;
    }

    getValidationEntries(validations: ObjectValidationConfig): ObjectValidationConfig {
        let filteredValidations = this.filter1.getValidationEntries(validations);
        let validationEntries = this.filter2.getValidationEntries(filteredValidations);
        return validationEntries;
    }

}