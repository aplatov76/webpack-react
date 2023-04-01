import { addCommentFormSelector } from '../../model/selectors/addCommentForm.selector'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import { Input } from 'shared/ui'
import { ThemeButton, Button } from 'shared/ui/Button/ui/Button'
import cls from './AddCommentForm.module.sass'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { setText, reducer } from '../../model/slice/addCommentFormSlice'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface AddCommentFormProps {
  classname?: string
  onSendComment: (text: string) => void
}

const AddCommentForm = ({ classname, onSendComment }: AddCommentFormProps) => {
  const comment = useSelector(addCommentFormSelector)
  const dispatch = useAppDispatch()

  const onCommentChangeText = useCallback(
    (text: string) => {
      dispatch(setText(text))
    },
    [dispatch]
  )

  const handlerSendComment = useCallback(() => {
    if (comment?.text) onSendComment(comment.text)
  }, [onSendComment, comment])

  return (
    <DynamicModuleLoader reducers={{ addCommentForm: reducer }}>
      <div className={classNames(cls.AddCommentForm, {}, [classname])}>
        <Input
          placeholder="Добавить комментарий"
          className={cls.input}
          value={comment?.text ?? ''}
          onChange={onCommentChangeText}
        />
        <Button theme={ThemeButton.OUTLINE} onClick={handlerSendComment}>
          Отправить
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default AddCommentForm
