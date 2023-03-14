export { reducer as userReducer } from './model/slice/userSlice'
export { setAuthData, initAuthData, logout } from './model/slice/userSlice'
export { type User, type UserSchema } from './model/types/user'
export { getUserInited } from './model/selectors/getUserInited/getUserInited'
