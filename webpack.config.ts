import webpack from "webpack";
import { buildWebPackConfig } from "./config/build/buildWebPackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode ?? "development";
  const PORT = env.port ?? 3000;

  const config: webpack.Configuration = buildWebPackConfig({
    mode,
    paths: paths,
    isDev: mode == "development" ? true : false,
    port: PORT,
  });

  return config;
};
