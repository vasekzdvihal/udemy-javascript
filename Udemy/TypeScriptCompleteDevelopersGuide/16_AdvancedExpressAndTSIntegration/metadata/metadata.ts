import 'reflect-metadata'; // Without import variable it's importing global things.

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log ("vrrrrrrrr");
  }
}

function get(path: string) {
  return function(target: Plane, key: string ) {
    Reflect.defineMetadata('path', path, target, key);
  }
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('path', target.prototype, key);
    console.log (secret);

    // Register routes here, use middleware, ect...
  }
}
