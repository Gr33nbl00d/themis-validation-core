export interface TextTemplateProcessor {
    processText(errorTextTemplate: string, object: any): string;
}
