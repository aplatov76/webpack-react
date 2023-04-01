/* eslint-disable eqeqeq */
/* eslint-disable multiline-ternary */
import { getProfileData, getProfileReadonly, setReadonly, updateProfileData } from 'entities/Profile'
import { cancelEdit } from 'entities/Profile/model/slice/profileSlice'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui'
import { ThemeButton } from 'shared/ui/Button/ui/Button'
import { Text } from 'shared/ui/Text'
import cls from './ProfilePageHeader.module.sass'

export const ProfilePageHeader = () => {
  const readonly = useSelector(getProfileReadonly)

  const dispatch = useAppDispatch()

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id == profileData?.id
  const onEdit = useCallback(() => {
    dispatch(setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    if (authData?.id) dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={cls.header}>
      <Text title={'Профиль'} />
      {canEdit && (
        <div>
          {' '}
          {readonly ? (
            <Button className={cls.editBtn} onClick={onEdit}>
              Редактировать
            </Button>
          ) : (
            <div>
              <Button className={cls.editBtn} theme={ThemeButton.OUTLINE} onClick={onCancelEdit}>
                Отменить
              </Button>
              <Button className={cls.editBtn} theme={ThemeButton.OUTLINE_RED} onClick={onSave}>
                Сохранить
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
