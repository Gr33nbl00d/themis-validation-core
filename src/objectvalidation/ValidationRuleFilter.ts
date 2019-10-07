import {ValidationRule} from "./ValidationRule";


export interface ValidationRuleFilter {
    isAcceptedRule(validationRule: ValidationRule): boolean;
}
