"use client";

import { useCallback, useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setTargetPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    if (target instanceof HTMLElement) {
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + (targetPosition.x - prevPosition.x) * 0.16,
        y: prevPosition.y + (targetPosition.y - prevPosition.y) * 0.16,
      }));
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPosition]);

  const flareSize = isPointer ? 0 : 50;
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <div
      className={`flare ${isPointer ? "pointer" : ""}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    />
  );
};

export default Cursor;
