const path = require("path");
const { promises: fs } = require("fs");

const SUPPORTED_EXTENSIONS = ["json"];

const isAllowedDirName = (name) =>
  name !== "node_modules" &&
  name !== "dist" &&
  name !== "cache" &&
  name !== "build" &&
  name !== "Pods" &&
  name !== "coverage";

const listDirectory = async (dir) => {
  const files = await fs.readdir(dir);
  return Promise.all(
    files.map(async (name) => {
      const stat = await fs.lstat(path.join(dir, name));
      const type = stat.isDirectory() ? "dir" : stat.isFile() ? "file" : "unknown";
      return { name, type };
    })
  );
};

const getAllFiles = async (dir) => {
  const dirContents = await listDirectory(dir);

  const childDirNames = dirContents
    .filter(({ type }) => type === "dir")
    .filter(({ name }) => name !== ".")
    .filter(({ name }) => isAllowedDirName(name))
    .map(({ name }) => name);

  const files = dirContents
    .filter(({ type }) => type === "file")
    .filter(({ name }) => SUPPORTED_EXTENSIONS.includes(name.split(".").pop()))
    .map(({ name }) => path.join(dir, name));

  for (const child of childDirNames) {
    const children = await getAllFiles(path.join(dir, child));
    files.push(...children);
  }

  return files;
};

module.exports = getAllFiles;
