import React, { useState, useMemo, useCallback } from "react";

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
    const { text, id, label, class: className } = props;
    const [showMore, setShowMore] = useState<string | number>();
    const limit = props.limit ?? 200;
    const ellipsis = props.ellipsis ?? "...";

    const ellipsisStr = useMemo(() => {
        if (text.length > limit) {
            return text.slice(0, limit) + ellipsis;
        } else {
            return text;
        }
    }, [text]);

    const onClick = useCallback(() => {
        setShowMore(id);
    }, [id, setShowMore]);

    return (
        <>
      <span>
        {showMore === id ? text : ellipsisStr}
      </span>
            {text.length > limit && showMore !== id && (
                <span
                    className={className ?? "more"}
                    onClick={onClick}
                >
          {label ?? "Show more"}
        </span>
            )}
        </>
    );
};

export default Ellipsis;
