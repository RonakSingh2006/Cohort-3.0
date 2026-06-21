# New Relic Setup on EC2 (Ubuntu using Docker)

## Step 1: Open New Relic

1. Log in to New Relic.
2. Navigate to **Add Data**.
3. Select your preferred **Language** and **Operating System**.

## Step 2: Use Docker Installation

Direct installation may not be supported or may have issues on some Ubuntu setups, so use the Docker-based installation method.

## Step 3: Create a License Key

1. In New Relic, create or copy your **License Key**.
2. Select:

   * **Basic Setup**
   * **Host Monitoring**

## Step 4: Run the Installation Command

New Relic will generate a Docker command similar to the one below:

```bash
docker run -d \
  --name newrelic-infra \
  --network=host \
  --cap-add=SYS_PTRACE \
  --privileged \
  -e NRIA_LICENSE_KEY=<YOUR_LICENSE_KEY> \
  newrelic/infrastructure:latest
```

Copy the generated command from New Relic and run it on your EC2 instance.

## Step 5: Verify the Container

Check that the container is running:

```bash
docker ps
```

You should see the `newrelic-infra` container in the list.

## Step 6: Confirm Connection

1. Return to the New Relic dashboard.
2. Wait a few minutes for data ingestion.
3. The host should appear under **Infrastructure → Hosts**.
4. Once connected, you will start seeing:

   * CPU Usage
   * Memory Usage
   * Disk Usage
   * Network Metrics
   * Running Processes

## Troubleshooting

### Check Container Logs

```bash
docker logs newrelic-infra
```

### Verify Internet Access

The EC2 instance must be able to make outbound HTTPS (443) requests to New Relic.

### Restart the Container

```bash
docker restart newrelic-infra
```

## Result

After successful installation and connection, New Relic will begin collecting and displaying infrastructure metrics from your EC2 instance.

