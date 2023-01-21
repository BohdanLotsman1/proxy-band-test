import { ReactNode, ReactPortal, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  id?: string;
}

const Portal = ({ children }: Props): ReactPortal | null => {
  const el = useRef<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    const uniqueId = Math.floor(Math.random() * 1000000000);
    el.current.id = "portal-" + uniqueId;
    document.body.appendChild(el.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      document.body.removeChild(el.current);
    };
  }, []);

  return createPortal(children, el.current);
};

export default Portal;
