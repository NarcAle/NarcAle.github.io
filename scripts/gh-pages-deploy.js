/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
	console.log("Checkout to gh-pages branch");
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
	console.log("Add and commit");
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
	console.log("Delete local dist folder");
	fs.rmdirSync("dist", { recursive: true });
	console.log("Checkout back to main branch");
    await execa("git", ["checkout", "-f", "main"]);
	console.log("Delete gh-pages local branch");
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();