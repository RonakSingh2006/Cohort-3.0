# Grafana

Grafana is an open-source visualization tool used to create dashboards and monitor metrics collected by Prometheus.

---

## Run with Docker Compose

Add the following service to your `docker-compose.yml`:

```yaml
grafana:
  image: grafana/grafana
  ports:
    - "3001:3000"
  environment:
    - GF_SECURITY_ADMIN_PASSWORD=admin
```

Start Grafana:

```bash
docker compose up -d
```

---

## Access Grafana

Open your browser:

```
http://localhost:3001
```

### Default Credentials

| Username | Password |
|----------|----------|
| `admin` | `admin` |

> Password can be changed using the `GF_SECURITY_ADMIN_PASSWORD` environment variable.

---

## Connect Prometheus

1. Go to **Connections → Data Sources**
2. Click **Add data source**
3. Select **Prometheus**
4. Set the URL:

```
http://prometheus:9090
```

> If Grafana and Prometheus are running in the same Docker Compose network, use the service name (`prometheus`) instead of `localhost`.

5. Click **Save & Test**

---

## Create a Dashboard

1. Click **Create → Dashboard**
2. Add a new visualization.
3. Select **Prometheus** as the data source.
4. Enter a PromQL query, for example:

```promql
rate(http_requests_total[5m])
```

5. Save the dashboard.

---

## Useful Queries

```promql
http_requests_total
```

```promql
rate(http_requests_total[5m])
```

```promql
sum(rate(http_requests_total[5m]))
```

```promql
histogram_quantile(
  0.95,
  sum(rate(http_request_duration_seconds_bucket[5m])) by (le)
)
```