import React, { useState } from "react";

const ButtonPrimary = ({ children, addClass }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <button
      onClick={() => setShowForm(true)}
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-green-500 hover:shadow-green-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
