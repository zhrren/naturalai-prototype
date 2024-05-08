import {AuthStore} from "@base/store/AuthStore";
import {settings} from "@base/kernel/Settings";
import {UnauthorizedMsg} from "@base/msg/UnauthorizedMsg";
import {RestAdapter, RestContentType, RestResponse} from "js-cutil/dist/base/cutil/RestClient";
import {eventbus} from "js-cutil/dist/base/cutil/Eventbus";

export class ApiAdapter implements RestAdapter {
  constructor(private authStore: AuthStore) {}

  errorHandler(error: Error | RestResponse<any>): void {
    if (error instanceof RestResponse) {
      // 提前注入错误处理函数，会被 API 的 parseError 重写
      error.parseError(res => {
        return res.data?.message;
      });

      if (error.status == 401) {
        this.authStore.logout();
        eventbus.emit(new UnauthorizedMsg());
      }
    }
  }

  get headers(): Record<string, any> {
    const brainToken = this.authStore.state.token;

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return {
      Authorization: `token ${brainToken}`,
    };
  }

  get baseUrl(): string {
    return settings.apiBaseUrl;
  }

  get contentType(): RestContentType {
    return RestContentType.form;
  }
}
