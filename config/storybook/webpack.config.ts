import path from 'path'
import webpack, { DefinePlugin, type RuleSetRule } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: ''
  }
  config!.resolve!.modules!.push(paths.src)
  config!.resolve!.extensions!.push('.ts', '.tsx')
  // @ts-ignore
  config!.module!.rules = config!.module!.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })
  config!.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config!.module!.rules!.push(buildCssLoader(true))
  config!.plugins!.push(
    new DefinePlugin({
      _IS_DEV_: true,
      _API_: JSON.stringify(''),
      _PROJECT_: 'storybook'
    })
  )
  return config
}
