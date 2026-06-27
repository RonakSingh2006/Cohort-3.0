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

export const register = promClient.register;