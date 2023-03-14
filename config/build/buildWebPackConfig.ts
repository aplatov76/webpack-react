import type webpack from 'webpack'
import { buildPlugins } from './buildPlugin'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebPackConfig(options: BuildOptions): webpack.Configuration {
  const {
    mode,
    isDev,
    apiUrl,
    paths: { entry, html, build },
    project
  } = options
  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
      publicPath: '/'
    },
    plugins: buildPlugins(html, isDev, apiUrl, project),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
