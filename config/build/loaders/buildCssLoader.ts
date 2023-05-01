import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import { BuildOptions } from '../types/config'

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.sass$/i,
    exclude: '/node_modules',
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.sass')),
            // для файлов sass которые не содержат .module
            localIdentName: isDev ? '[path][name]__[local]-[hash:base64:5]' : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }
}
