import {ValidationScopeFilter} from "./ValidationScopeFilter";
import {ObjectValidationConfig} from "../";

export class FieldScopeFilter implements ValidationScopeFilter {
    private fieldname: string;

    constructor(fieldname: string) {
        this.fieldname = fieldname;

    }

    getValidationEntries(validations: ObjectValidationConfig): ObjectValidationConfig {
        let validationEntries = validations.validationEntries.filter((value, index, array) => {
            if (!value.metadata.fieldname)
                return false;

            if (value.metadata.fieldname == this.fieldname)
                return true;
            else
                return false;
        });

        return new ObjectValidationConfig(validationEntries);
    }

}
