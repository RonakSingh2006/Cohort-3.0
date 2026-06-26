import type { Request, Response, NextFunction } from 'express';
export function midleware(req: Request, res: Response, next: NextFunction) {
  let start = Date.now();
  next();
  let end = Date.now();

  console.log(`Request to ${req.path} method ${req.method} took ${end - start} ms to respond.`);
}