import React from 'react';

type Props = {
  css: string,
  name: string,
  action: () => void
};

export default (props: Props) => (
  <button className={props.css} onClick={props.action}>
    {props.name}
  </button>
);
