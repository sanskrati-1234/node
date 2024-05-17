import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, "./api");

const promptUser = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "apiName",
      message: "Enter the API name (e.g., Users or Account/Users):",
      validate: (input) => {
        if (!input.trim()) {
          return "API name cannot be empty.";
        }
        if (!/^[a-zA-Z0-9/_-]+$/.test(input)) {
          return "Invalid API name. Only alphanumeric characters, slashes, underscores, and dashes are allowed.";
        }
        return true;
      },
    },
  ]);
  return answers.apiName;
};

const createFiles = (apiPath) => {
  const files = [
    "controller.js",
    "model.js",
    "routes.js",
    "service.js",
    "validation.js",
  ];

  files.forEach((file) => {
    const filePath = path.join(apiPath, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, `// ${file} for ${apiPath}`, "utf8");
      console.log(`Created: ${filePath}`);
    }
  });
};

const run = async () => {
  try {
    const apiName = await promptUser();
    const apiPath = path.join(baseDir, apiName);

    if (fs.existsSync(apiPath)) {
      console.error(`Error: The API path "${apiName}" already exists.`);
      process.exit(1);
    }

    fs.mkdirSync(apiPath, { recursive: true });
    console.log(`Created directory: ${apiPath}`);

    createFiles(apiPath);
  } catch (error) {
    console.error("An error occurred:", error);
    process.exit(1);
  }
};

run();
