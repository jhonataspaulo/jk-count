import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { CountItem } from "./CountItem";
import styles from "./styles.module.css";

export const Count: React.FC<{}> = () => {
  const initialDate = dayjs("2019-02-20");
  const [now, setNow] = useState<Dayjs>(dayjs());

  const years = Math.floor(now.diff(initialDate, "years"));
  const months = Math.floor(now.diff(initialDate.add(years, "y"), "month"));
  const days = Math.floor(
    now.diff(initialDate.add(years, "years").add(months, "months"), "days")
  );
  const hour = now.hour();
  const minutes = now.minute();
  const seconds = now.second();

  useEffect(() => {
    setTimeout(() => {
      setNow(dayjs());
    }, 1000);
  }, [now]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <CountItem digit={years} title="Years" />
        <CountItem digit={months} title="Months" />
        <CountItem digit={days} title="Days" />
        <CountItem digit={hour} title="Hours" />
        <CountItem digit={minutes} title="Minutes" />
        <CountItem digit={seconds} title="Seconds" />
      </div>
    </div>
  );
};
