import type { Request, Response, NextFunction } from 'express';
import { activeRequestGuage } from "./metrics";
import { requestCounter } from "./metrics";

export const middleware = (req : Request , res : Response , next : NextFunction) =>{
  const start = Date.now();
  activeRequestGuage.inc();

  res.on('finish',()=>{
    const end = Date.now();

    console.log(`Request took ${end - start}`);

    requestCounter.inc({
      method : req.method,
      route : req.route ? req.route.path : req.path,
      status_code : res.statusCode,
    });

    activeRequestGuage.dec();
  });

  next();
}