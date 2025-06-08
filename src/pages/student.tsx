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
    <div className="flex custom-css  justify-center">
      {/* {noramlVar} */}
      <Button name="Click Me" backgroundColor="bg-blue-500" />
      <Button name="Save" backgroundColor="bg-red-500" />
      <Button name="Edit" />
    </div>
  );
};

export default index;
