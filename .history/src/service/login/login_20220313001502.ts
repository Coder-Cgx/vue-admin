import gxRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login'
  LoginUserInfo='/users/'// 用法: /users/1
}

// 账号密码登录
export function accountLoginRequest(account: IAccount) {
  return gxRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 请求用户信息
export function requestUserInfo(id: number){
  return gxRequest.get<IDataType>({
    url: LoginAPI.
  })
}
