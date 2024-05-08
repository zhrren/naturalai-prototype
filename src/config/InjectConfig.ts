import {Container} from "inversify";
import {AuthStore} from "@base/store/AuthStore";
import {ApiClient} from "@base/api/ApiClient";
import {interfaces} from "inversify/lib/interfaces/interfaces";

export class InjectConfig {
  private static getIt?: Container;

  static configure(): Container {
    if (InjectConfig.getIt != null) {
      return InjectConfig.getIt;
    }
    InjectConfig.getIt = new Container({
      autoBindInjectable: true,
      defaultScope: "Singleton",
      skipBaseClassChecks: true,
    });

    const getIt = InjectConfig.getIt;
    configureContainer(getIt);
    console.log("InjectConfig complete");
    return getIt;
  }
}

function configureContainer(getIt: Container): void {
  const it = <T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): T => {
    return getIt.get(serviceIdentifier);
  };

  getIt.bind(AuthStore).toConstantValue(new AuthStore());
  getIt.bind(ApiClient).toConstantValue(new ApiClient(it(AuthStore)));
}
