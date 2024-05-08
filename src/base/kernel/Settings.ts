import {Configuration} from "js-cutil/dist/base/cutil/Configuration";
import {SyncStorage} from "js-cutil/dist/base/cutil/SyncStorage";

function parseEnv(): string {
  const domain = [""];

  if (domain.includes(window.location.hostname)) {
    return window.location.hostname;
  }
  return process.env.REACT_APP_ENV ?? "development";
}

const configuration = new Configuration(
  {
    baseUrl: {
      production: "https://brain.im",
      development: "https://brain.im",
    },
  },
  parseEnv(),
  sessionStorage as SyncStorage,
  window.location.search
);

export class Settings {
  constructor(params: { baseUrl: string }) {
    this.baseUrl = params.baseUrl;
  }

  baseUrl: string;

  get apiBaseUrl(): string {
    return this.baseUrl + "/api";
  }
}

export const settings: Settings = new Settings({
  baseUrl: configuration.extract("baseUrl"),
});
