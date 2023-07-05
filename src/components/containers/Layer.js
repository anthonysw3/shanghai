import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLayer } from "../utils/hooks/useLayer";
import { useScreenClass } from "react-grid-system";
import { Block } from "baseui/block";

const Layer = ({ layers }) => {
  const screenClass = useScreenClass();
  const isMobile = ["xs", "sm"].includes(screenClass);

  const initialX = isMobile ? "100%" : "0%";
  const initialY = isMobile ? "0%" : "100%";

  const x = useSpring(useMotionValue(initialX), {
    stiffness: 500,
    damping: 30,
  });
  const y = useSpring(useMotionValue(initialY), {
    stiffness: 500,
    damping: 30,
  });

  const { closeLayer } = useLayer();

  const handleClick = (event) => {
    event.stopPropagation();
    closeLayer();
    x.set(isMobile ? "100%" : "0%");
    y.set(isMobile ? "0%" : "100%");
  };

  useEffect(() => {
    if (layers.length > 0) {
      x.set("0%");
      y.set("0%");
    }
  }, [layers, x, y]);

  return (
    <div>
      {layers.map((layer) => (
        <Block
          key={layer.id}
          style={{ transform: `translate(${x.get()}, ${y.get()})` }}
          onClick={handleClick}
        >
          {layer.id}
        </Block>
      ))}
    </div>
  );
};
