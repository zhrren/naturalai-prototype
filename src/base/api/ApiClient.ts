import {AuthStore} from "@base/store/AuthStore";
import {ApiAdapter} from "@base/api/ApiAdapter";
import {Rest, RestClient} from "js-cutil/dist/base/cutil/RestClient";

export class ApiClient {
  private readonly rest: Rest;

  constructor(private authStore: AuthStore) {
    const restAdapter = new ApiAdapter(authStore);
    this.rest = new RestClient(restAdapter);
  }
}
