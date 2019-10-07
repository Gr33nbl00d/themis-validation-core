import {ValidationEntry} from "../objectvalidation/ValidationEntry";


export interface ValueRetriever {
    getValue(metadata:any): any;
}
