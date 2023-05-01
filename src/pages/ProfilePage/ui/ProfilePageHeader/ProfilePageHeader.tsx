/* eslint-disable eqeqeq */
/* eslint-disable multiline-ternary */
import { getProfileData, getProfileReadonly, setReadonly, updateProfileData } from '@/entities/Profile'
import { cancelEdit } from '@/entities/Profile/model/slice/profileSlice'
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

export const ProfilePageHeader = () => {
  const readonly = useSelector(getProfileReadonly)

  const dispatch = useAppDispatch()

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  console.log(authData, profileData)
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
  console.log(canEdit, readonly)
  return (
    <HStack justify={'between'}>
      <Text title={'Профиль'} />
      {canEdit && (
        <>
          {readonly ? (
            <Button data-testid="EditableProfileCardHeader.EditButton" onClick={onEdit}>
              Редактировать
            </Button>
          ) : (
            <HStack gap={'8'}>
              <Button
                data-testid="EditableProfileCardHeader.CancelButton"
                theme={ThemeButton.OUTLINE}
                onClick={onCancelEdit}
              >
                Отменить
              </Button>
              <Button
                data-testid="EditableProfileCardHeader.SaveButton"
                theme={ThemeButton.OUTLINE_RED}
                onClick={onSave}
              >
                Сохранить
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  )
}
