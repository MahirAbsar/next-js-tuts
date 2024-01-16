"use client";

const error = (error) => {
  return (
    <h3 className="text-red-600 text-3xl font-bold">{error.error.message}</h3>
  );
};

export default error;
