# Deno Permissions
#### More details at https://docs.deno.com/runtime/fundamentals/security/#permissions
deno run main.ts # Run a Deno script. Deno will prompt for permissions if needed
## Run with Network Permissions
deno run --allow-net main.ts # Run a Deno script with all network permissions
deno run --allow-net=example.com:80,example2.com:443 main.ts # Run a Deno script with network permissions to example.com on port 80 and example2.com on port 443
deno run --allow-net=1.1.1.1:80 main.ts # Run a Deno script with network permissions to an IP address
deno run --allow-net --deny-net=example3.com main.ts # Run a Deno script with network permissions to all except example.com

## Run with Environment Permissions
deno run --allow-env main.ts # Run a Deno script with all env variable permissions
deno run \
  --allow-env \
  --deny-env=AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY \
  main.ts # Run a Deno script with all env variable permissions except AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY

## Run with Filesystem Permissions
deno run --allow-read main.ts # Run a Deno script with all fs read permissions
deno run --allow-write main.ts # Run a Deno script with all fs write permissions


