const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  useRelativeSnapshots: true,
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        readFileMaybe(filename) {
          if (fs.existsSync(filename)) {
            console.log("read file");
            return fs.readFileSync(filename, "utf8");
          }

          return "{}";
        },
      });
    },
  },
});
