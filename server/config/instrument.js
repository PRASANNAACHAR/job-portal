// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import {nodeProfilingIntegration} from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://87e6830f25a79d95653d87c2cee232cc@o4509746259230720.ingest.us.sentry.io/4509746263621632",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],

//   tracesSampleRate: 1.0,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
 
});
Sentry.profiler.startProfiler();

Sentry.startSpan({
    name: "my First transcation",
}, ()=> {

});

Sentry.profiler.stopProfiler();