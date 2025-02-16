import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick, children }: ChildProps) => {
  return <div>
    <h1>Hi there! Color is {color}</h1>
    <button onClick={onClick}>Click me!</button>
    <span>{children}</span>
  </div>
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return <div>
    <h1>Hi there! Color is {color}</h1>
    <button onClick={onClick}>Click me!</button>
    <span>{children}</span>
  </div>
}
