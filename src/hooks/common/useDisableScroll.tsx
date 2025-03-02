import { useEffect } from "react";

function useDisableScroll(isDisabled: boolean) {
  useEffect(() => {
    if (isDisabled) {
      document.body.style.overflow = "hidden"; // Chặn cuộn
    } else {
      document.body.style.overflow = "auto"; // Cho phép cuộn
    }

    return () => {
      document.body.style.overflow = "auto"; // Đảm bảo reset khi unmount
    };
  }, [isDisabled]);
}

export default useDisableScroll;
