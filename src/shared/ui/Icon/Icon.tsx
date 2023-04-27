import cls from './Icon.module.sass'
import { classNames } from '@/shared/lib/classNames'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  classname?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = ({ classname, Svg, ...otherProps }: IconProps) => {
  return <Svg className={classNames(cls.Icon, {}, [classname])} {...otherProps} />
}
