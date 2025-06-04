import Button from "@/component/Button";
import { useState } from "react";

const index = () => {
  let [getter, setter] = useState<boolean>(false);

  const handleClick = () => {
    // setter(true)
    setter((s) => !s);
  };
  // jsx
  return (
    <div className="flex justify-center">
      {/* {noramlVar} */}
      <Button name="Click Me" />
      <Button name="Save" />
      <Button name="Edit" />
    </div>
  );
};

export default index;
