import {ValidationScopeFilter} from "./ValidationScopeFilter";
import {ObjectValidationConfig} from "../";


export class MatchEverythingScopeFilter implements ValidationScopeFilter {
    getValidationEntries(validations: ObjectValidationConfig): ObjectValidationConfig {
        return validations;
    }
}
