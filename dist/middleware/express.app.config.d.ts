import * as express from 'express';
import { Oas3AppOptions } from './oas3.options';
export declare class ExpressAppConfig {
    private app;
    private routingOptions;
    private definitionPath;
    private openApiValidatorOptions;
    private oas3UI;
    private oas3Validator;
    private oas3Metadata;
    private oas3Router;
    constructor(definitionPath: string, appOptions: Oas3AppOptions);
    private setOpenApiValidatorOptions;
    configureLogger(loggerOptions: any): any;
    private errorHandler;
    getApp(): express.Application;
    getMiddleware(): any;
}
