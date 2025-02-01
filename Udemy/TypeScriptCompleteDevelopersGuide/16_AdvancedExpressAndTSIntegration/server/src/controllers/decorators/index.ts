// If you create index file in folder, you can reexport things from whole folder and instead of
//
// import { get } from "./decorators/routes";
// import { controller } from "./decorators/controller";
//
// you can use this (one line import).
//
// import { get, controller } from "./decorators";
//
// It doesn't work without this index file, and it's ES2016 not TS thing.

export * from './controller';
export * from './routes';
export * from './use';
export * from './bodyValidator';
