import {ValidationScopeFilter} from "./ValidationScopeFilter";
import {ObjectValidationConfig} from "../";


export class MatchEverythingFilter implements ValidationScopeFilter {
    getValidationEntries(validations: ObjectValidationConfig): ObjectValidationConfig {
        return validations;
    }
}
