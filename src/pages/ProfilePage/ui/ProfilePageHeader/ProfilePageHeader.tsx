/* eslint-disable multiline-ternary */
import { getProfileReadonly, setReadonly, updateProfileData } from 'entities/Profile'
import { cancelEdit } from 'entities/Profile/model/slice/profileSlice'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui'
import { ThemeButton } from 'shared/ui/Button/ui/Button'
import { Text } from 'shared/ui/Text'
import cls from './ProfilePageHeader.module.sass'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const readonly = useSelector(getProfileReadonly)

  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={cls.header}>
      <Text title={'Профиль'} />
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
  )
}
