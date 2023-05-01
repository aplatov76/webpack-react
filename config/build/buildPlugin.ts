import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import webpack from 'webpack'

export function buildPlugins(
  html: string,
  isDev: boolean,
  apiUrl: string,
  project: string
): webpack.WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: html
    }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev),
      _API_: JSON.stringify(apiUrl),
      _PROJECT_: JSON.stringify(project)
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: 'write-references'
      }
    })
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new webpack.HotModuleReplacementPlugin())
    //plugins.push(new webpack.HotModuleReplacementPlugin())
  }
  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    )
  }

  return plugins
}
