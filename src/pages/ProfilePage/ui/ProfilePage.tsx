import { reducer } from '@/entities/Profile/model/slice/profileSlice'
import { useCallback } from 'react'
import { updateProfile } from '@/entities/Profile'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page/Page'
import { VStack } from '@/shared/ui/Stack'
import { type Currency } from '@/entities/Currency'
import { EditableProfileCard } from '@/features/editableProfileCard'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: reducer
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()

  const { id } = useParams<{ id: string }>()

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
      <Page data-testid={'ProfilePage'}>
        <VStack gap={'10'}>
          <EditableProfileCard />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
