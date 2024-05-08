import {InjectConfig} from "@config/InjectConfig";
import {interfaces} from "inversify";
import ServiceIdentifier = interfaces.ServiceIdentifier;

export function getIt<T>(serviceIdentifier: ServiceIdentifier<T>): T {
  return InjectConfig.configure().get<T>(serviceIdentifier);
}
