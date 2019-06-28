import Axios, { AxiosRequestConfig } from "axios";
import config from "../config/config";
import { ArticleService } from "./article.service";

/**
 * service news
 */
export class HitsService {
  /**
   * download data first time
   */
  static async initialLoad() {
    console.log(new Date().toLocaleString(), "- Starting");
    const { hits } = await this.getData();
    for (const element of hits) {
      await ArticleService.save(element);
    }
    console.log(new Date().toLocaleString(), "- Initial load ready");
  }

  /**
   * find all articles from api
   */
  static async getData() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `${config.api.url}`
    };
    const { data } = await Axios(options);
    console.log(
      new Date().toLocaleString(),
      `- Hits loaded from api (${data.hits.length})`
    );
    return data;
  }
}
