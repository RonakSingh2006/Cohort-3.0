# New Relic Setup on EC2 (Docker)

## Installation

1. Log in to New Relic.
2. Navigate to **Add Data**.
3. Select your preferred language and operating system.
4. Choose:

   * **Basic Setup**
   * **Host Monitoring**
5. Create or copy your **License Key**.
6. Since direct installation may not be available, use the Docker installation method.
7. Run the generated command on your EC2 instance:

```bash
docker run -d \
  --name newrelic-infra \
  --network=host \
  --cap-add=SYS_PTRACE \
  --privileged \
  -e NRIA_LICENSE_KEY=<YOUR_LICENSE_KEY> \
  newrelic/infrastructure:latest
```

## Verification

Check that the container is running:

```bash
docker ps
```

Verify logs:

```bash
docker logs newrelic-infra
```

After a few minutes, the host should appear under:

```text
Infrastructure → Hosts
```

You should start seeing:

* CPU Usage
* Memory Usage
* Disk Usage
* Network Metrics
* Running Processes

---

# NRQL (New Relic Query Language)

New Relic uses **NRQL (New Relic Query Language)** to query, analyze, and visualize monitoring data.

With NRQL, you can:

* Monitor infrastructure metrics
* Analyze application performance
* Query logs and events
* Create custom dashboards
* Build custom visualizations

## Example Query

```sql
SELECT average(cpuPercent) AS 'CPU Used %'
FROM SystemSample
TIMESERIES AUTO
SINCE 30 minutes ago
```

This query displays CPU utilization over time.

---

# Custom Dashboards

1. Navigate to **Dashboards**.
2. Create a new dashboard or open an existing one.
3. Click **Add Widget**.
4. Select **NRQL Query**.
5. Enter the desired NRQL query.
6. Choose a visualization type.
7. Save the widget.

This allows you to create dashboards containing only the metrics relevant to your application or infrastructure.

---

# Alerts

Alerts can be created directly from dashboard widgets and charts.

## Steps

1. Open the chart or widget you want to monitor.
2. Click the **three-dot menu (⋮)**.
3. Select **Create Alert Condition**.
4. Configure:

   * Warning Threshold
   * Critical Threshold
   * Evaluation Window
5. Select or create a notification group/channel.
6. Configure the alert message.
7. Save the alert condition.

## Notification Channels

New Relic supports notifications through:

* Email
* Slack
* Microsoft Teams
* PagerDuty
* Webhooks

## Example Alert

NRQL Query:

```sql
SELECT average(cpuPercent)
FROM SystemSample
```

Thresholds:

* Warning: CPU > 70%
* Critical: CPU > 80%
* Evaluation Window: 5 minutes

When the threshold is breached, New Relic sends notifications to the configured recipients.

---

## Result

New Relic enables infrastructure monitoring, custom dashboards, and automated alerting using NRQL, helping teams proactively monitor system health and respond to issues quickly.

