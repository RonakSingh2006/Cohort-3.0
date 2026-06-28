```mermaid
flowchart LR

    Job["Short-lived Job"]
    Push["Pushgateway"]

    Job -->|push| Push

    subgraph Linux["Linux Machine"]
        NodeExporter["Node Exporter"]

        NodeApp["Node.js App
        /metrics"]

        GoApp["Golang App
        /metrics"]
    end

    subgraph K8s["Kubernetes Cluster"]
        Node1["Node 1"]
        Node2["Node 2"]
    end

    Prometheus["Prometheus"]

    UI["Prometheus UI"]

    Push -->|push metrics| Prometheus

    NodeExporter -->|metrics| Prometheus

    NodeApp <-->|pulls metrics| Prometheus

    GoApp <-->|pulls metrics| Prometheus

    K8s -->|service discovery| Prometheus

    UI -->|PromQL Query| Prometheus
```

# Prometheus

Prometheus is an open-source monitoring and alerting toolkit used to collect, store, and query application metrics. It periodically scrapes metrics exposed by applications and stores them as time-series data.

## Why Use Prometheus?

- Monitor application health
- Track system and business metrics
- Create dashboards using Grafana
- Configure alerts for failures and abnormal behavior
- Analyze application performance over time

## Exporting Metrics in Node.js

Install the `prom-client` package to expose metrics from your application.

```bash
npm install prom-client
```

`prom-client` provides an easy way to create and expose custom metrics that Prometheus can scrape.

## Types of Metrics

### 1. Counter

A **Counter** is a metric that only increases (or resets to zero when the application restarts).

**Use Cases**
- Total HTTP requests
- Total logins
- Number of errors
- Messages processed

```javascript
const client = require("prom-client");

const requestCounter = new client.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests"
});

requestCounter.inc();      // +1
requestCounter.inc(5);     // +5
```

---

### 2. Gauge

A **Gauge** represents a value that can increase or decrease.

**Use Cases**
- Active users
- Memory usage
- CPU utilization
- Queue length

```javascript
const activeUsers = new client.Gauge({
    name: "active_users",
    help: "Current active users"
});

activeUsers.set(25);
activeUsers.inc();
activeUsers.dec();
```

---

### 3. Histogram

A **Histogram** measures the distribution of values by grouping observations into buckets.

**Use Cases**
- API response time
- Database query latency
- Request size
- File upload duration

```javascript
const responseTime = new client.Histogram({
    name: "http_request_duration_seconds",
    help: "HTTP request duration",
    buckets: [0.1, 0.5, 1, 2, 5]
});

const end = responseTime.startTimer();

// Execute request...

end();
```

# Prometheus Setup

## 1. Create `prometheus.yml`

```yaml
global:
  scrape_interval: 15s

  external_labels:
    monitor: "codelab-monitor"

scrape_configs:
  - job_name: "monitor-app"

    static_configs:
      - targets: ["localhost:3000"]
```

---

## 2. Run Prometheus

```bash
docker run -d \
  --name prometheus \
  -p 9090:9090 \
  -v ./prometheus.yml:/etc/prometheus/prometheus.yml \
  prom/prometheus
```

At this point, Prometheus will **not** be able to scrape your application if it is running on your host machine (`localhost:3000`).

Inside a Docker container, `localhost` refers to the container itself, **not your computer**.

---

## 3. Containerize the Application

Build the Docker image:

```bash
docker build -t monitor-app .
```

---

## 4. Create a Docker Network

Create a shared network so both containers can communicate.

```bash
docker network create prom-network
```

---

## 5. Run the Application Container

```bash
docker run -d \
  --name node-app \
  --network prom-network \
  -p 3000:3000 \
  monitor-app
```

---

## 6. Update `prometheus.yml`

Since both containers are on the same Docker network, Prometheus should scrape the application using its **container name** instead of `localhost`.

```yaml
global:
  scrape_interval: 15s

  external_labels:
    monitor: "codelab-monitor"

scrape_configs:
  - job_name: "monitor-app"

    static_configs:
      - targets: ["node-app:3000"]
```

---

## 7. Run Prometheus on the Same Network

```bash
docker run -d \
  --name prometheus \
  --network prom-network \
  -p 9090:9090 \
  -v ./prometheus.yml:/etc/prometheus/prometheus.yml \
  prom/prometheus
```

Now Prometheus can successfully scrape metrics from the application.

---

## 8. Verify

Open Prometheus in your browser:

```
http://localhost:9090
```

Navigate to **Status → Targets** to verify that the `monitor-app` target is **UP**.

---

## Alternative: Docker Compose

Instead of creating the network and running multiple Docker commands manually, you can use **Docker Compose** to start both the Node.js application and Prometheus with a single command.

```bash
docker compose up -d
```
