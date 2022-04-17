import React, { useState, useMemo, useCallback } from "react";

export interface EllipsisProps {
  ellipsis?: string;
  label?: string;
  id: string | number;
  text: string;
  limit?: number;
  class?: string;
  mode?: number;
}

const Ellipsis = (props: EllipsisProps) => {
  const { text, id, label, class: className, mode } = props;
  const [showMore, setShowMore] = useState<string | number>();
  const limit = props.limit ?? 200;
  const ellipsis = props.ellipsis ?? "...";

  const ellipsisStr = useMemo(() => {
    if (text.length > limit + ellipsis.length) {
      let breakpoint;

      switch (mode) {
        case 1:
          breakpoint = limit + text.substring(limit).indexOf(" ");
          break;

        case 2:
          breakpoint = text.substring(0, limit).lastIndexOf(" ");
          break;

        default:
          return text.slice(0, limit - ellipsis.length) + ellipsis;
      }

      return text.substring(0, breakpoint) + ellipsis;
    } else {
      return text;
    }
  }, [text]);

  const onClick = useCallback(() => {
    setShowMore(id);
  }, [id, setShowMore]);

  return (
    <>
      <span>{showMore === id ? text : ellipsisStr}</span>
      {text.length > limit && showMore !== id && (
        <span className={className ?? "more"} onClick={onClick}>
          {label ?? "Show more"}
        </span>
      )}
    </>
  );
};

export default Ellipsis;
