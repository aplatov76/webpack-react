import { classNames } from '@/shared/lib/classNames'
import cls from './EditableProfileCard.module.sass'
import { memo, useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  ProfileCard,
  updateProfile
} from '@/entities/Profile'
import { useInitialEffects } from '@/shared/lib/hooks/useInitialEffects/useInitialEffects'
import { type Currency } from '@/entities/Currency'
import { ProfilePageHeader } from '@/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader'

interface EditableProfileCardProps {
  className?: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const formErrors = useSelector(getProfileValidateErrors)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const { id } = useParams<{ id: string }>()

  useInitialEffects(() => {
    if (id) dispatch(fetchProfileData(String(id)))
  })

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ first: value ?? '' }))
    },
    [dispatch]
  )

  const onChangeLastname = useCallback(
    (value?: Currency) => {
      dispatch(updateProfile({ lastname: value ?? '' }))
    },
    [dispatch]
  )

  const onChangeAge = useCallback(
    (value?: number) => {
      dispatch(updateProfile({ age: value }))
    },
    [dispatch]
  )
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ city: value }))
    },
    [dispatch]
  )
  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(updateProfile({ currency: value }))
    },
    [dispatch]
  )

  return (
    <>
      <ProfilePageHeader />
      {formErrors?.length && formErrors.map((error) => <p key={error}> {error} </p>)}
      <ProfileCard
        onChangeLastname={onChangeLastname}
        onChangeFirstname={onChangeFirstname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeCurrency={onChangeCurrency}
        data={formData}
        readonly={readonly}
        error={error}
        isLoading={isLoading}
      />
    </>
  )
})
