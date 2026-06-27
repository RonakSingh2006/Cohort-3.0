import promClient from 'prom-client';

export const requestCounter = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
});

export const activeRequestGuage = new promClient.Gauge({
  name : 'active_requests',
  help : 'Number of active request'
})

export const requestDurationHistogram = new promClient.Histogram({
  name: 'http_request_duration',
  help: 'Duration of HTTP requests in milliseconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 1, 5, 10, 50, 100, 300, 500, 1000, 3000, 5000],
});

export const register = promClient.register;