"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  // Drain all logs
  let sortedLogSources = []
  for (let i = 0; i < logSources.length; i++) {
    let log = logSources[i].pop()
    sortedLogSources.push(log)
  }

  // Sort logs chronologically
  sortedLogSources.sort((a,b) => a.date - b.date);

  // Print all log entries chronologically
  for (let i = 0; i < sortedLogSources.length; i++) {
    printer.print(sortedLogSources[i])
  }
  printer.done()
  return console.log("Sync sort complete.");
};
