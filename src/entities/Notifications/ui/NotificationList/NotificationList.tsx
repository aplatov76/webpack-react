import { useGetNotifications } from '@/entities/Notifications/api/notificationApi'
import { memo } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import cls from './NotificationList.module.sass'

interface NotificationListProps {
  classname?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { classname } = props

  const { data, isLoading } = useGetNotifications(null, { pollingInterval: 5000 })

  if (isLoading) {
    return (
      <VStack gap={'12'} max classname={classname}>
        <Skeleton width={'100%'} border={'8px'} height={'80px'} classname={cls.skeleton} />
        <Skeleton width={'100%'} border={'8px'} height={'80px'} classname={cls.skeleton} />
        <Skeleton width={'100%'} border={'8px'} height={'80px'} classname={cls.skeleton} />
      </VStack>
    )
  }

  return (
    <VStack gap={'12'} max classname={cls.NotificationList}>
      {data?.map((el) => (
        <NotificationItem key={el.id} item={el} />
      ))}
    </VStack>
  )
})
