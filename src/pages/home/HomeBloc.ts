import {getIt} from "@uikit/getIt";
import {AuthStore} from "@base/store/AuthStore";
import {ApiClient} from "@base/api/ApiClient";

export class HomeState {}

export class HomeBloc {
  constructor() {}
  state = new HomeState();

  apiClient = getIt(ApiClient);
  authStore = getIt(AuthStore);

  async load(): Promise<void> {}
}
