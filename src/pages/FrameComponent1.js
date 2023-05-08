import styles from "./FrameComponent1.module.css";
const FrameComponent1 = () => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src="/frame-4.svg" />
    </div>
  );
};

export default FrameComponent1;
