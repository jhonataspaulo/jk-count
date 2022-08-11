import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { CountItem } from "./CountItem";
import styles from "./styles.module.css";

export const Count: React.FC<{}> = () => {
  const [start, setStart] = useState<Dayjs>(dayjs("2019-02-20"));
  const [now, setNow] = useState<Dayjs>(dayjs());

  const yearInSeconds = 1000 * 60 * 60 * 24 * 365;
  const monthInSeconds = 1000 * 60 * 60 * 24 * 30;
  const hourInSeconds = 1000 * 60 * 60;
  const dayInSeconds = 1000 * 60 * 60 * 24;
  const minuteInSeconds = 1000 * 60;

  useEffect(() => {
    setTimeout(() => {
      setNow(dayjs());
    }, 1000);
    console.log(now);
  }, [now]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <CountItem
          digit={Math.floor(now.diff(start) / yearInSeconds)}
          title="Years"
        />
        <CountItem
          digit={Math.floor(now.diff(start, "months") % 12)}
          title="Months"
        />
        <CountItem
          digit={Math.floor(now.diff(start, "months") % 30)}
          title="Days"
        />
        <CountItem
          digit={Math.floor((now.diff(start) % dayInSeconds) / hourInSeconds)}
          title="Hours"
        />
        <CountItem
          digit={Math.floor(
            (now.diff(start) % hourInSeconds) / minuteInSeconds
          )}
          title="Minutes"
        />
        <CountItem
          digit={Math.floor((now.diff(start) % minuteInSeconds) / 1000)}
          title="Seconds"
        />
      </div>
    </div>
  );
};
