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

# Grafana Alerts

Grafana Alerting allows you to monitor your metrics and receive notifications whenever a condition is met.

## Steps to Create an Alert

### 1. Open Alerting

* Navigate to **Alerting** from the Grafana sidebar.
* Click **New Alert Rule**.
* Select **Create Alert Rule**.

### 2. Add a Query

* Choose your data source (e.g., **Prometheus**).
* Write the PromQL query you want to monitor.

Example:

```promql
rate(http_requests_total[5m])
```

### 3. Configure the Alert Condition

* Define the condition that should trigger the alert.

Example:

* Alert when the query result is **greater than 100**.

### 4. Create a Folder

* Create or select an **Alert Folder** to organize your alert rules.

### 5. Set Evaluation Behavior

Configure how Grafana evaluates the alert:

* **Evaluation Group**
* **Evaluation Interval** (e.g., every 1 minute)
* **Pending Period** (optional)
* **No Data** behavior
* **Execution Error** behavior

### 6. Configure Notifications

To receive alert notifications via email:

1. Configure **SMTP** in your Grafana configuration.
2. Go to **Alerting → Contact Points**.
3. Create a new **Email Contact Point**.
4. Add the recipient email address.
5. Create a **Notification Policy** to route alerts to the email contact point.

Once the alert condition is met, Grafana will automatically send an email notification.

---

## Workflow

```text
Alerting
    ↓
New Alert Rule
    ↓
Create Alert Rule
    ↓
Add Prometheus Query
    ↓
Set Alert Condition
    ↓
Create/Select Alert Folder
    ↓
Configure Evaluation Behavior
    ↓
Configure SMTP
    ↓
Create Email Contact Point
    ↓
Create Notification Policy
    ↓
Save Alert Rule
```
