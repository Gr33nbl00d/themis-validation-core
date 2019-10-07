import {ValidationEntry} from "../objectvalidation/ValidationEntry";
import {ValueRetriever} from "./ValueRetriever";

export class DirectRetriever implements ValueRetriever {
    private value: any;

    constructor(value: any) {
        this.value = value;

    }

    getValue(metadata: any): any {
        return this.value;
    }

}
