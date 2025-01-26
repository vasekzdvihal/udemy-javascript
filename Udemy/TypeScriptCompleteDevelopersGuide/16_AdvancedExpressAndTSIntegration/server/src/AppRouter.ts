import express from "express";

// SINGLETON PATTERN (Just one router for app at time)
export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router { // getter can be used here
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
