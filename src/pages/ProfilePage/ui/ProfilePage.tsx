import { reducer } from 'entities/Profile/model/slice/profileSlice'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import cls from './ProfilePage.module.sass'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: reducer
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ProfilePage, {}, [className])}>ProfilePage</div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
