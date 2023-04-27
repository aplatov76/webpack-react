import { Flex, type FlexProps } from '../Flex/Flex'
import cls from './HStack.module.sass'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
  const { align = 'start' } = props
  return <Flex {...props} direction={'column'} />
}
