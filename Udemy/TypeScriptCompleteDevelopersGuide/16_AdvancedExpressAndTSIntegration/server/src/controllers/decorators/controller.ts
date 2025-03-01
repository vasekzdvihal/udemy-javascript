import 'reflect-metadata';
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { NextFunction, RequestHandler, Response, Request } from "express";

function bodyValidators(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }

    next();
  }
}

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();

    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);

      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];

      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];
      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        // Inside router is definition of values that's are possible and TS check if MethodsEnum are valid.
        // So when we add value (like testTest = "testTest"), this will be considered error because there is no testTest in router definition
        router[method](`${routePrefix}${path}`,  ...middlewares, validator, routeHandler);
      }
    });
  }
}
