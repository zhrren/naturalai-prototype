import isBlank from "@sedan-utils/is-blank";
import {StoreBase} from "js-cutil/dist/base/cutil/StoreBase";
import {JsonUtil} from "js-cutil/dist/base/cutil/JsonUtil";

export class AuthState {
  token = "";

  copyWith(brainAuthToken?: string): AuthState {
    const state = new AuthState();
    state.token = brainAuthToken ?? this.token;
    return state;
  }
}

export class AuthStore extends StoreBase<AuthState> {
  private static STORAGE_KEY = "AuthStore:state";

  constructor() {
    super(() => {
      return new AuthState();
    });
    const value = localStorage.getItem(AuthStore.STORAGE_KEY);
    const newState = JsonUtil.toModelFromType(AuthState, value);
    if (isBlank(this.state.token)) {
      if (newState && !isBlank(newState.token)) {
        this.emit(newState);
      }
    }

    this.on(newValue => {
      localStorage.setItem(AuthStore.STORAGE_KEY, JsonUtil.stringify(newValue) ?? "");
      console.log("AuthStore", "state changed", newValue);
    });
  }

  login(token: string) {
    const newState = this.state.copyWith(token);
    this.emit(newState);
  }

  logout() {
    const newState = this.state.copyWith("");
    this.emit(newState);
  }
}
