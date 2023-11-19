import React from "react";

export const Title = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
};
