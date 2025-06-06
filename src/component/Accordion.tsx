import { useState } from "react";

interface AccordionType {
  title: string;
  discription: string;
}

const Accordion = ({ title, discription }: AccordionType) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="border p-4 mb-2">
      <h2
        className="font-bold text-lg cursor-pointer"
        onClick={toggleAccordion}
      >
        {title}
        <span className="ml-2 text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </h2>
      {isOpen && <p className="text-gray-700 mt-2">{discription}</p>}
    </div>
  );
};

export default Accordion;
