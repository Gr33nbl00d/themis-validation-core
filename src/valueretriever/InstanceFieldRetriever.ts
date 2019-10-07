import {ValidationEntry} from "../objectvalidation/ValidationEntry";
import {ValueRetriever} from "./ValueRetriever";

export class DefaultInstanceFieldRetriever implements ValueRetriever {
    that: any;

    constructor(instance: any) {
        this.that = instance;
    }

    getValue(metadata: any): any {
        if (!metadata.fieldname) {
            throw new Error("metadata does not contain a field name " + metadata)
        }
        return this.that[metadata.fieldname];
    }
}
