'use strict';
import { ExpressAppConfig } from "./middleware/express.app.config";
import { Oas3AppOptions } from "./middleware/oas3.options";

export function expressAppConfig(definitionPath: string, appOptions: Oas3AppOptions): ExpressAppConfig {
  return new ExpressAppConfig(definitionPath, appOptions);
}

export function getMiddleware(definitionPath: string, appOptions: Oas3AppOptions): any {
  let exp = new ExpressAppConfig(definitionPath, appOptions);
  return exp.getMiddleware();
}