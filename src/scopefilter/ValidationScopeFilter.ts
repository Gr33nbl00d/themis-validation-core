import {ObjectValidationConfig} from "../";

export interface ValidationScopeFilter {
    getValidationEntries(validations: ObjectValidationConfig): ObjectValidationConfig;
}
