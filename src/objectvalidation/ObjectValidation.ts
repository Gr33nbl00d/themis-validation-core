import {ObjectValidationConfig} from "./ObjectValidationConfig";
import {ValidationScopeFilter} from "../scopefilter/ValidationScopeFilter";
import {ValueRetriever} from "../valueretriever/ValueRetriever";
import {ValidatorError} from "./ValidationError";

export class ObjectValidation {
    protected objectValidationConfig: ObjectValidationConfig;

    isInvalid(valueRetriever: ValueRetriever, validationScopeFilter?: ValidationScopeFilter): boolean {
        return this.objectValidationConfig.isInvalid(valueRetriever, validationScopeFilter);
    }

    getErrors(valueRetriever: ValueRetriever, validationScopeFilter: ValidationScopeFilter): Array<ValidatorError> {
        return this.objectValidationConfig.getErrors(valueRetriever, validationScopeFilter)
    }

}
