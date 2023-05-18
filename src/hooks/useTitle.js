import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Figurio`;
  }, [title]);
};
export default useTitle;
