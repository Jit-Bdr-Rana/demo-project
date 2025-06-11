const Alert = () => {
  const handleclick = () => {
    alert("Button clicked!");
  };
  return (
    <button
      className="flex border-2 bg-amber-700 text-2xl text-black  p-3 rounded-md m-3 cursor-pointer"
      onClick={handleclick}
    >
      Click Me for alert
      <span className="ml-2">🔔</span>
    </button>
  );
};

export default Alert;
