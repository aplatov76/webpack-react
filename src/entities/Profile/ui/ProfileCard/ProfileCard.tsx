import cls from './ProfileCard.module.sass'
import { classNames } from 'shared/lib/classNames'
import { type ProfileType } from 'entities/Profile'
import { Text, ThemeText } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input/ui/Input/Input'
import { Spinner } from 'shared/ui/Spinner'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from 'entities/Currency'
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect'

interface ProfileCardProps {
  classname?: string
  data?: ProfileType
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeLastname: () => void
  onChangeFirstname: () => void
  onChangeAge: () => void
  onChangeCity: () => void
}

export const ProfileCard = ({
  classname,
  data,
  error,
  isLoading,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity
}: ProfileCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [classname])}>
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [classname, cls.error])}>
        <Text
          title={'Произошла ошибка при загрузке профиля'}
          theme={ThemeText.ERROR}
          text={'Попробуйте обновить страницу'}
        ></Text>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [classname])}>
      <div className={cls.data}>
        <Input value={data?.first} onChange={onChangeFirstname} readonly={readonly} className={cls.input} />
        <Input value={data?.lastname} onChange={onChangeLastname} readonly={readonly} className={cls.input} />
        <Input value={data?.age} onChange={onChangeAge} readonly={readonly} className={cls.input} />
        <Input value={data?.city} onChange={onChangeCity} readonly={readonly} className={cls.input} />
        <CurrencySelect value={data?.currency} />
      </div>
    </div>
  )
}
