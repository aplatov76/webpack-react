import cls from './ProfileCard.module.sass'
import { classNames } from 'shared/lib/classNames'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile'
import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui'
import { Input } from 'shared/ui/Input/ui/Input/Input'

interface ProfileCardProps {
  classname?: string
}

export const ProfileCard = ({ classname }: ProfileCardProps) => {
  const data = useSelector(getProfileData)

  return (
    <div className={classNames(cls.ProfileCard, {}, [classname])}>
      <div className={cls.header}>
        <Text title={'Профиль'} />
        <Button className={cls.editBtn}>Редактировать</Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} className={cls.input} />
        <Input value={data?.lastname} className={cls.input} />
      </div>
    </div>
  )
}
