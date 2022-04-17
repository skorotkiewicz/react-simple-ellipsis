import React, { useState } from "react";

export interface EllipsisProps {
  ellipsis: string;
  label: string;
  id: string | number;
  text: string;
  limit: number;
  class: string;
  showLess: boolean;
}

const Ellipsis = (props: EllipsisProps) => {
  const [showMore, setShowMore] = useState<string | number>();
  const limit = props.limit ? props.limit : 200;
  const ellipsis = props.ellipsis ? props.ellipsis : "...";

  const ellipsisStr = (str: string) => {
    if (str.length > limit) {
      return str.slice(0, limit) + ellipsis;
    } else {
      return str;
    }
  };

  return (
    <>
      <span>
        {showMore === props.id ? props.text : ellipsisStr(props.text)}
      </span>
      {props.text.length > limit && showMore !== props.id && (
        <span
          className={props.class ? props.class : "more"}
          onClick={() => {
            setShowMore(props.id);
          }}
        >
          {props.label ? props.label : "Show more"}
        </span>
      )}
    </>
  );
};

export default Ellipsis;
