import { memo, useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  ProfileCard,
  updateProfile
} from '@/entities/Profile'
import { useInitialEffects } from '@/shared/lib/hooks/useInitialEffects/useInitialEffects'
import { type Currency } from '@/entities/Currency'
// eslint-disable-next-line webpack-project-plugin/layer-imports
import { ProfilePageHeader } from '@/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { reducer } from '@/entities/Profile/model/slice/profileSlice'
import { getState } from '@/entities/Profile/model/selectors/getProfileSelector/getProfileSelector'

const reducers: ReducersList = {
  profile: reducer
}

export const EditableProfileCard = memo(() => {
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileData)
  const state = useSelector(getState)
  const formErrors = useSelector(getProfileValidateErrors)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const { id } = useParams<{ id: string }>()

  console.log('state: ', state)
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
    <DynamicModuleLoader reducers={reducers}>
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
    </DynamicModuleLoader>
  )
})
