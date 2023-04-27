import { type Notification } from '../../modal/types/notification'
import cls from './NotificationItem.module.sass'
import { Card } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'

interface NotificationItemProps {
  classname?: string
  item: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { classname, item } = props
  const content = (
    <Card classname={cls.NotificationItem}>
      <Text title={item.title} text={item.description}></Text>
    </Card>
  )
  if (item?.href) {
    return (
      <a className={cls.link} href={item.href} target={'_blank'} rel="noreferrer">
        {content}
      </a>
    )
  }
  return content
}
