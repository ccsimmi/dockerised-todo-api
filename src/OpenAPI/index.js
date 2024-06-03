const YAML = require("js-yaml");
const fs = require("node:fs");
const path = require("node:path");

function getSwaggerDoc() {
    const root = path.resolve(__dirname, "../../")
    try {
        const file = fs.readFileSync(path.join(root, "openapi.yml"));
        return YAML.load(file);
    } catch (error) {
        console.error(error);
    }
}

module.exports = getSwaggerDoc;