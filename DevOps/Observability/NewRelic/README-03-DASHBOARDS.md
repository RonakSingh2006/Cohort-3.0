# Custom Dashboards

## Overview

New Relic Dashboards allow you to visualize infrastructure and application metrics in a single place. Dashboards can contain multiple widgets powered by NRQL queries.

---

## Creating a Dashboard

### Step 1: Open Dashboards

Navigate to:

```text
Dashboards
```

### Step 2: Create a Dashboard

Click:

```text
Create a Dashboard
```

Provide:

* Dashboard Name
* Description (Optional)

---

## Adding a Widget

1. Open the dashboard.
2. Click **Add Widget**.
3. Select **NRQL Query**.
4. Enter an NRQL query.
5. Choose a visualization type.
6. Save the widget.

---

## Example Widget: CPU Usage

NRQL Query:

```sql
SELECT average(cpuPercent) AS 'CPU Usage'
FROM SystemSample
TIMESERIES AUTO
SINCE 30 minutes ago
```

Recommended Visualization:

```text
Line Chart
```

---

## Example Widget: Memory Usage

```sql
SELECT average(memoryUsedPercent) AS 'Memory Usage'
FROM SystemSample
TIMESERIES AUTO
SINCE 30 minutes ago
```

---

## Example Widget: Disk Usage

```sql
SELECT average(diskUsedPercent) AS 'Disk Usage'
FROM StorageSample
TIMESERIES AUTO
SINCE 30 minutes ago
```

---

## Example Widget: CPU Usage by Host

```sql
SELECT average(cpuPercent)
FROM SystemSample
FACET hostname
SINCE 30 minutes ago
```

This displays CPU utilization separately for each host.

---

## Supported Visualizations

* Line Chart
* Area Chart
* Billboard
* Table
* Pie Chart
* Bar Chart

---

## Dashboard Best Practices

* Create separate dashboards for Infrastructure and APM.
* Use meaningful widget titles.
* Group related metrics together.
* Add alerts to critical widgets.
* Limit dashboard clutter by showing only important metrics.
