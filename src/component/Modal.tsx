import React, { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-amber-300 text-white rounded cursor-pointer"
      >
        Open Modal
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl text-black font-bold mb-4">Simple Modal</h2>
        <p className="text-black">This is a basic modal.</p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 px-4 py-2 cursor-pointer bg-amber-300 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
