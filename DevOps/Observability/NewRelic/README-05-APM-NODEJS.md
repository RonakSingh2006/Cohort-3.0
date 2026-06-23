# Node.js Application Performance Monitoring (APM)

## Overview

Application Performance Monitoring (APM) provides visibility into application behavior, including:

* Response Times
* Throughput
* Error Rates
* Database Queries
* External API Calls
* Slow Transactions

---

## Prerequisites

* Node.js Application
* New Relic Account
* New Relic License Key

---

## Setup

### Step 1: Open APM Setup

Navigate to:

```text
APM & Services
```

Select:

```text
Node.js
```

---

### Step 2: Install New Relic Agent

```bash
npm install newrelic
```

---

### Step 3: Configure Application

Provide:

* Application Name
* License Key

Example:

```bash
NEW_RELIC_APP_NAME="node-app" \
NEW_RELIC_LICENSE_KEY="<YOUR_LICENSE_KEY>" \
node --experimental-loader=newrelic/esm-loader.mjs index.js
```

---

### Step 4: Start Application

Start the application using the command provided by New Relic.

---

## Verification

After a few minutes, the application should appear under:

```text
APM & Services → Your Application
```

---

## Metrics Available

### Response Time

Measures how long requests take to complete.

### Throughput

Measures requests processed per minute.

### Error Rate

Tracks application errors and exceptions.

### Transactions

Identifies slow routes and operations.

### Database Monitoring

Tracks:

* Query Duration
* Slow Queries
* Database Calls

### External Services

Monitors:

* Third-party APIs
* Microservices
* External Dependencies

---

## Common Troubleshooting

### Application Not Appearing

Verify:

```bash
npm list newrelic
```

Check application startup logs.

---

### License Key Issues

Verify:

```bash
echo $NEW_RELIC_LICENSE_KEY
```

---

### Agent Not Sending Data

Check application logs for:

```text
New Relic Agent Errors
```

---

## Benefits of APM

* Faster issue detection
* Performance bottleneck analysis
* Database optimization
* External service monitoring
* Improved application reliability
