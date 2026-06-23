# Alerting

## Overview

New Relic Alerts help detect issues before they impact users by monitoring metrics and triggering notifications when thresholds are breached.

---

## Creating an Alert Condition

### Step 1: Open a Dashboard Widget

Navigate to a chart or widget you want to monitor.

### Step 2: Create Alert

Click:

```text
⋮ → Create Alert Condition
```

---

## Configure Alert

Provide:

### Warning Threshold

Example:

```text
CPU Usage > 70%
```

### Critical Threshold

Example:

```text
CPU Usage > 80%
```

### Evaluation Window

Example:

```text
5 Minutes
```

The condition must remain true during the evaluation window before an alert is triggered.

---

## Example CPU Alert

NRQL Query:

```sql
SELECT average(cpuPercent)
FROM SystemSample
```

Configuration:

| Setting           | Value     |
| ----------------- | --------- |
| Warning           | 70%       |
| Critical          | 80%       |
| Evaluation Window | 5 Minutes |

---

## Notification Channels

New Relic supports:

* Email
* Slack
* Microsoft Teams
* PagerDuty
* Webhooks

---

## Configuring Notifications

1. Create or select a notification destination.
2. Select notification channel.
3. Configure recipients.
4. Customize alert message.
5. Save configuration.

---

## Recommended Infrastructure Alerts

### High CPU Usage

```sql
SELECT average(cpuPercent)
FROM SystemSample
```

### High Memory Usage

```sql
SELECT average(memoryUsedPercent)
FROM SystemSample
```

### Disk Usage

```sql
SELECT average(diskUsedPercent)
FROM StorageSample
```

### Host Not Reporting

Monitor hosts that stop sending data unexpectedly.

---

## Alert Workflow

```text
Metric Collected
        ↓
Threshold Breached
        ↓
Condition Evaluated
        ↓
Alert Triggered
        ↓
Notification Sent
```
