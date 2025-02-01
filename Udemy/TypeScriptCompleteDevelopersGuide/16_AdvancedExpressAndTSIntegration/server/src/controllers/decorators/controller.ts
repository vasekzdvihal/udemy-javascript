import 'reflect-metadata';
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();

    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);

      if (path) {
        // Inside router is definition of values that's are possible and TS check if MethodsEnum are valid.
        // So when we add value (like testTest = "testTest"), this will be considered error because there is no testTest in router definition
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    });
  }
}
