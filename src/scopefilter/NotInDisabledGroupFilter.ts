import {ValidationScopeFilter} from "./ValidationScopeFilter";
import {ObjectValidationConfig} from "..";

export default class NotInDisabledGroupFilter implements ValidationScopeFilter {
    disabledGroups: Array<string>;


    constructor(disabledGroups: Array<string>) {
        this.disabledGroups = disabledGroups;
    }

    getValidationEntries(validations: ObjectValidationConfig): ObjectValidationConfig {
        let validationEntries = validations.validationEntries.filter((value, index, array) => {
            if (this.disabledGroups.indexOf(value.metadata.groupName) == -1) {
                return true;
            } else
                return false

        });

        return new ObjectValidationConfig(validationEntries);

    }

}