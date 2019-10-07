import {Validator} from "./Validator";
import {ValueRetriever} from "../valueretriever/ValueRetriever";
import {ValidatorError} from "./ValidationError";
import {ValidationRuleFilter} from "../";

export class ValidationEntry {
    metadata: any;
    validator: Validator;

    constructor(validator: Validator, metadata?) {
        this.validator = validator;
        this.metadata = metadata;
    }

    isInvalid(valueRetriever: ValueRetriever, validationRuleFilter?: ValidationRuleFilter) {
        return this.validator.isInvalid(valueRetriever.getValue(this.metadata),validationRuleFilter);
    }

    getValidationErrors(valueRetriever: ValueRetriever, validationRuleFilter?: ValidationRuleFilter): ValidatorError {
        let validationErrors = this.validator.getValidationErrors(valueRetriever.getValue(this.metadata),validationRuleFilter);
        return new ValidatorError(this.metadata, validationErrors);
    }
}
