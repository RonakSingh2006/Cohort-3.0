import type { Request, Response, NextFunction } from 'express';
import { activeRequestGuage } from "./metrics";
import { requestCounter } from "./metrics";
import { requestDurationHistogram } from './metrics';

export const middleware = (req : Request , res : Response , next : NextFunction) =>{
  const start = Date.now();
  activeRequestGuage.inc();

  res.on('finish',()=>{
    const end = Date.now();

    let duration = end - start;

    // counter
    requestCounter.inc({
      method : req.method,
      route : req.route ? req.route.path : req.path,
      status_code : res.statusCode,
    });

    // gauge
    activeRequestGuage.dec();

    // histogram
    requestDurationHistogram.observe({
      method : req.method,
      route : req.route ? req.route.path : req.path,
      status_code : res.statusCode
    },duration)

  });

  next();
}