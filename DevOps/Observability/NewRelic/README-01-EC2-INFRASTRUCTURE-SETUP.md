# EC2 Infrastructure Monitoring Setup

## Overview

This guide explains how to install the New Relic Infrastructure Agent on an EC2 instance using Docker.

## Installation

### Step 1: Log in to New Relic

Navigate to the New Relic dashboard.

### Step 2: Add Infrastructure Monitoring

Go to:

```text
Add Data
```

Select:

* Basic Setup
* Host Monitoring

### Step 3: Obtain License Key

Create or copy your New Relic License Key.

### Step 4: Run Infrastructure Agent

Execute the following command on your EC2 instance:

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

### Verify Container Status

```bash
docker ps
```

### Verify Agent Logs

```bash
docker logs newrelic-infra
```

## Confirm Host Visibility

After a few minutes, the host should appear under:

```text
Infrastructure → Hosts
```

## Metrics Available

The infrastructure agent provides:

* CPU Usage
* Memory Usage
* Disk Usage
* Network Metrics
* Running Processes

## Troubleshooting

Check container logs for connectivity or authentication errors.

```bash
docker logs newrelic-infra
```
