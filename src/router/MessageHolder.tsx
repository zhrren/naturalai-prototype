import {App} from "antd";
import {messageAgent} from "@uikit/messageAgent";
import isBlank from "@sedan-utils/is-blank";
import {MessageConfig} from "js-cutil/dist/base/cutil/MessageAgent";
import {RestResponseError} from "js-cutil/dist/base/cutil/RestClient";

export function MessageHolder(props: { children: any }): JSX.Element {
  const staticFunction = App.useApp();
  const message = staticFunction.message;
  messageAgent.setup({
    error(config: MessageConfig | string): void {
      if (typeof config == "string") {
        message.error(config);
      } else {
        const p = config as MessageConfig;
        message.error(p.content, p.duration, p.onClose);
      }
    },
    failure(config: MessageConfig | string, error: Error): void {
      let message: string | undefined = error.message;
      if (error instanceof RestResponseError) {
        message = error.errorDescription;
      }
      if (isBlank(message)) {
        messageAgent.error(config);
      } else {
        if ((config as MessageConfig).content) {
          const newConfig: any = config;
          newConfig.content = message;
          messageAgent.error(newConfig);
        } else {
          messageAgent.error(message ?? "");
        }
      }
    },
    info(config: MessageConfig | string): void {
      if (typeof config == "string") {
        message.info(config);
      } else {
        const p = config as MessageConfig;
        message.info(p.content, p.duration, p.onClose);
      }
    },
    loading(config: MessageConfig | string): void {
      if (typeof config == "string") {
        message.loading(config);
      } else {
        const p = config as MessageConfig;
        message.loading(p.content, p.duration, p.onClose);
      }
    },
    success(config: MessageConfig | string): void {
      if (typeof config == "string") {
        message.success(config);
      } else {
        const p = config as MessageConfig;
        message.success(p.content, p.duration, p.onClose);
      }
    },
    warning(config: MessageConfig | string): void {
      if (typeof config == "string") {
        message.warning(config);
      } else {
        const p = config as MessageConfig;
        message.warning(p.content, p.duration, p.onClose);
      }
    },
  });

  return <>{props.children}</>;
}
