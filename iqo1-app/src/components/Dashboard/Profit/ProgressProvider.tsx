import React, { ReactElement } from "react";

// If you don't have a version of React that supports
// hooks, you can use a class-based version of this
// component in ProgressProviderUsingClass.js
interface kekv {
    valueStart:number,
    valueEnd:number,
    children(value:number):ReactElement;
}

const ProgressProvider = ({ valueStart, valueEnd, children }:kekv) => {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};
export default ProgressProvider;


