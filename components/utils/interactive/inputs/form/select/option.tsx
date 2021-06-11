/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react';
import styles from '../style.module.scss';
import { Close } from 'components/svg';
const Option = (props: {
  desc: string;
  value: string;
  val: any;
}): JSX.Element => {
  const { desc, value, val } = props;
  const r = React.useRef(null);
  const [active, setActive] = useState(false);
  const handleValue = () => {
    // console.log(r.current);
    if (val.multiOption) {
      const check = val.c.target.value.includes(r.current.dataset.value);
      // console.log(check, val.c.target.value, r.current.dataset.value);
      const arr = val.c.target.value;

      if (!check) {
        arr.push(r.current.dataset.value);
        val.change({
          target: {
            value: arr,
            type: val.c.target.type,
          },
        });
        setActive(true);
      } else {
        const i = val.c.target.value.findIndex(
          (res) => r.current.dataset.value === res,
        );
        arr.splice(i, 1);
        val.change({
          target: {
            value: arr,
            type: val.c.target.type,
          },
        });
        setActive(false);
      }
    } else {
      val.change({
        target: { value: r.current.dataset.value, type: val.c.target.type },
      });
    }
  };
  useEffect(() => {
    if (val.c.target.value.length === 0) {
      setActive(false);
    }
  }, [val.c.target.value]);
  return (
    <li
      className={
        active ? `${styles.activeOption} ${styles.option}` : styles.option
      }
      ref={r}
      data-value={value}
      onClick={() => handleValue()}>
      <div className={styles.item}>
        <span>{desc}</span>
        <span>{active && <Close />}</span>
      </div>
    </li>
  );
};
export default React.memo(Option);
