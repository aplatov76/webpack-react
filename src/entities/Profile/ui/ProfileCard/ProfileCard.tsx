import cls from './ProfileCard.module.sass'
import { classNames } from '@/shared/lib/classNames'
import { type ProfileType } from '@/entities/Profile'
import { Text, ThemeText } from '@/shared/ui/Text'
import { Input } from '@/shared/ui/Input'
import { Spinner } from '@/shared/ui/Spinner'
import { CurrencySelect } from '@/entities/Currency/ui/CurrencySelect/CurrencySelect'
import { VStack } from '@/shared/ui/Stack'

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
  onChangeCurrency: () => void
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
  onChangeCity,
  onChangeCurrency
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
  console.log('data: ', data)
  return (
    <VStack gap={'4'} classname={classNames(cls.ProfileCard, {}, [classname])}>
      <Input value={data?.first} onChange={onChangeFirstname} readonly={readonly} />
      <Input value={data?.lastname} onChange={onChangeLastname} readonly={readonly} />
      <Input value={data?.age} onChange={onChangeAge} readonly={readonly} />
      <Input value={data?.city} onChange={onChangeCity} readonly={readonly} />
      <CurrencySelect value={data?.currency} onChange={onChangeCurrency} />
    </VStack>
  )
}
