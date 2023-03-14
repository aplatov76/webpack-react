import { fetchProfileData, getProfileReadonly, getProfileValidateErrors, ProfileCard } from 'entities/Profile'
import { cancelEdit, reducer } from 'entities/Profile/model/slice/profileSlice'
import { useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useSelector } from 'react-redux'
import { updateProfile } from 'entities/Profile/'
import { getProfileForm, getProfileError, getProfileIsLoading, type ProfileType } from 'entities/Profile'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import cls from './ProfilePage.module.sass'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: reducer
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const formErrors = useSelector(getProfileValidateErrors)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  useEffect(() => {
    dispatch(fetchProfileData())
  }, [])

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ first: value ?? '' }))
    },
    [dispatch]
  )

  const onChangeLastname = useCallback(
    (value?: string) => {
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

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfilePageHeader />
        {formErrors?.length && formErrors.map((error) => <p key={error}> {error} </p>)}
        <ProfileCard
          onChangeLastname={onChangeLastname}
          onChangeFirstname={onChangeFirstname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          data={formData}
          readonly={readonly}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
