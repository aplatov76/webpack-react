import { Flex, type FlexProps } from '../Flex/Flex'
import cls from './HStack.module.sass'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
  return <Flex {...props} direction={'row'} />
}
