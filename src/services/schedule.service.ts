import cron from "node-cron";
import { HitsService } from "./hits.service";
import { ArticleService } from "./article.service";

/**
 * service cron jobs
 */
export class ScheduleService {
  /**
   * task for downloading data
   */
  static scheduleLoad() {
    cron.schedule("0 * * * *", async () => {
      console.log(new Date().toLocaleString(), "- Executing schedule job");
      const { hits } = await HitsService.getData();
      for (const element of hits) {
        await ArticleService.save(element);
      }
      console.log(new Date().toLocaleString(), "- Schedule job ready");
    });
  }
}
