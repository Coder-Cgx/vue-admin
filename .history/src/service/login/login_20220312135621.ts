import gxRequest from '../index'

import { IAccount,IDataType,ILoginREsult} from './type'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount){
  return gxRequest.post<IDataType<>>({
    url: LoginAPI.AccountLogin
    data: account
  })
}
