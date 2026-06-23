# NRQL Guide

## Overview

NRQL (New Relic Query Language) is used to query, analyze, and visualize monitoring data within New Relic.

## Common Use Cases

* Infrastructure monitoring
* Application monitoring
* Log analysis
* Dashboard creation
* Alert conditions
* Custom visualizations

## Example: CPU Utilization

```sql
SELECT average(cpuPercent) AS 'CPU Used %'
FROM SystemSample
TIMESERIES AUTO
SINCE 30 minutes ago
```

This query displays CPU utilization over time.

## Using FACET

FACET groups data by a specific attribute.

### Example: CPU by Host

```sql
SELECT average(cpuPercent)
FROM SystemSample
FACET hostname
SINCE 30 minutes ago
```

This displays CPU usage for each host separately.

## Additional Examples

### Memory Usage

```sql
SELECT average(memoryUsedPercent)
FROM SystemSample
TIMESERIES AUTO
SINCE 30 minutes ago
```

### Disk Usage

```sql
SELECT average(diskUsedPercent)
FROM StorageSample
TIMESERIES AUTO
SINCE 30 minutes ago
```

### Network Traffic

```sql
SELECT rate(sum(receiveBytesPerSecond), 1 minute)
FROM NetworkSample
TIMESERIES AUTO
SINCE 30 minutes ago
```
