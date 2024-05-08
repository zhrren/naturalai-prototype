import {getIt} from "@uikit/getIt";
import {AuthStore} from "@base/store/AuthStore";
import {ApiClient} from "@base/api/ApiClient";

export class LoginState {}

export class LoginBloc {
  constructor() {}
  state = new LoginState();

  apiClient = getIt(ApiClient);
  authStore = getIt(AuthStore);

  async load(): Promise<void> {}
}
