import { fetchProfileData, ProfileCard } from 'entities/Profile'
import { reducer } from 'entities/Profile/model/slice/profileSlice'
import { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import cls from './ProfilePage.module.sass'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: reducer
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProfileData())
  }, [])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
