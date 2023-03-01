/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cls from './LoginForm.module.sass'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Button, Input } from 'shared/ui'
import { useSelector, useStore } from 'react-redux'
import { memo, useCallback, useEffect } from 'react'
import { setUserName, setPassword, reducer as loginReducer } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/selectLoginState/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName'
// import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { Text, ThemeText } from 'shared/ui/Text'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const store = useStore() as ReduxStoreWithManager

  /*
  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer)

    return () => store.reducerManager.remove('loginForm')
  }, [])
  */
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(setUserName(value))
    },
    [dispatch]
  )
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(setPassword(value))
    },
    [dispatch]
  )

  const onLoginForm = useCallback(async () => {
    // @ts-ignore
    const result = await dispatch(loginByUsername({ username, password }))
    console.log('result: ', result)
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, username, password])
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <div className={classNames(cls.LoginModal, {}, [className])}>
        {error && <Text text={error} theme={ThemeText.ERROR}></Text>}
        <Input type="text" onChange={onChangeUserName} value={username} />
        <Input type="password" onChange={onChangePassword} value={password} />
        <Button className="loginBtn" disabled={isLoading} onClick={onLoginForm}>
          Войти
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
