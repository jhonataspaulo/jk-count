import styles from "./styles.module.css";

type Props = {
  title: string;
  digit: number;
};

export const CountItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxNumber}>
        <span className={styles.digit}>{props.digit}</span>
      </div>
      <span>{props.title}</span>
    </div>
  );
};
