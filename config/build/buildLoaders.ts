import type webpack from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { type BuildOptions } from './types/config'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const codebabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tsxCodebabelLoader = buildBabelLoader({ ...options, isTsx: true })

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const cssLoaders = buildCssLoader(options.isDev)

  // если не использовать ts то так же понадобится бэйбел
  ///const typescriptLoader = {
  //  test: /\.tsx?$/,
  //  use: 'ts-loader',
  //  //exclude: ['/node_modules/', '/src/**/*.stories.tsx']
  //  exclude: ['/node_modules/']
  //}

  //return [typescriptLoader, cssLoaders, babelLoader, svgLoader, fileLoader]
  return [fileLoader, svgLoader, codebabelLoader, tsxCodebabelLoader, cssLoaders]
}
