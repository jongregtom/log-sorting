"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    async function sortLogsAsync () {
      // Drain all logs async
      let sortedLogSources = [];
      for (let i = 0; i < logSources.length; i++) {
        let log = await logSources[i].popAsync();
        sortedLogSources.push(log);
      }

      // Sort logs chronologically
      sortedLogSources.sort((a,b) => a.date - b.date);

      // Print all log entries chronologically
      for (let i = 0; i < sortedLogSources.length; i++) {
        printer.print(sortedLogSources[i]);
      }
      printer.done();
    }
    sortLogsAsync().then(() => resolve(console.log("Async sort complete."))).catch()
  });
};
