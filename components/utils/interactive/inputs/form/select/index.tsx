/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react';
import { ArrowSelect, Close } from 'components/svg';
import styles from '../style.module.scss';
interface iTarget {
  target: { value: string | string[]; type: string };
}
function Select(props: {
  onChange: Function;
  value: any;
  children: any;
  id: string;
  label: string;
  name: string;
  multiOption: boolean;
}): JSX.Element {
  const { onChange, value, children, id, label, name, multiOption } = props;
  const [select, setSel] = useState(false);
  const isRef = React.useRef(null);
  const [current, setCurrent] = useState<iTarget>({
    target: {
      value: value,
      type: name,
    },
  });

  useEffect(() => {
    console.log([typeof current.target.value, current.target.value, value]);
    if (multiOption) {
      if (current.target.value !== value.length) {
        onChange(current);
      }
      setSel(false);
    } else {
      if (current.target.value !== value) {
        onChange(current);
      }
      setSel(false);
    }
  }, [current]);
  const handleClick = (e) => {
    setSel(true);
  };
  const isBlur = () => {
    isRef.current.onselectstart = () => {
      return false;
    };
    isRef.current.selectionEnd = 0;
  };
  const deleteValue = () => {
    if (multiOption) {
      setCurrent({
        target: {
          value:
            typeof current.target.value === 'object'
              ? current.target.value.splice(current.target.value.length)
              : [],
          type: current.target.type,
        },
      });
    } else {
      setCurrent({ target: { value: '', type: current.target.type } });
    }
    onChange(current);
  };
  const change = {
    change: setCurrent,
    c: current,
    multiOption: multiOption,
  };
  return (
    <div className={styles.containerSelect}>
      <div
        className={
          (current.target.value !== null &&
            current.target.value !== '' &&
            current.target.value.length !== 0) ||
          select === true
            ? styles.select + ' ' + styles.activeSelect
            : styles.select
        }>
        {!label ? null : (
          <label htmlFor={'inp' + id}>
            <span>{label}</span>
          </label>
        )}
        <input
          value={current.target.value}
          id={'inp' + id}
          onFocus={handleClick}
          onClick={isBlur}
          ref={isRef}
          readOnly
          name={name}
          type="text"
        />
        <div
          className={
            select ? styles.icons + ' ' + styles.activeIcons : styles.icons
          }>
          {current.target.value !== '' && current.target.value.length !== 0 ? (
            <div onClick={() => deleteValue()}>
              <Close />
            </div>
          ) : (
            <ArrowSelect />
          )}
        </div>
      </div>
      <div
        className={
          select ? styles.extend + ' ' + styles.active : styles.extend
        }>
        <ul>{children(change)}</ul>
      </div>
    </div>
  );
}

export default React.memo(Select);
