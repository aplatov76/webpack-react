import { reducer } from 'entities/Profile/model/slice/profileSlice'
import { useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useSelector } from 'react-redux'
import {
  getProfileForm,
  getProfileError,
  getProfileIsLoading,
  updateProfile,
  fetchProfileData,
  getProfileReadonly,
  getProfileValidateErrors,
  ProfileCard
} from 'entities/Profile'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import cls from './ProfilePage.module.sass'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { useInitialEffects } from 'shared/lib/hooks/useInitialEffects/useInitialEffects'
import { useParams } from 'react-router-dom'
import { Page } from 'shared/ui/Page/Page'

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
      <Page>
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
      </Page>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
