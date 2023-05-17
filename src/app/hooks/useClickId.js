import { useState } from "react";

export const useClickId = () => {
  const [clickId, setClickId] = useState(null);

  const onClickShow = (inputId) => {
    setClickId(inputId);
  };

  const onClickHidden = (id, formState) => {
    if (!formState[id]) {
      setClickId(null);
    }
  };
  return {
    onClickShow,
    onClickHidden,
    clickId,
  };
};
