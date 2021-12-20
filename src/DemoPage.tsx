import { useState } from "react";

type StringFunction = (a: String) => void;
const withInputValue = (action:StringFunction) => ({target:{value}}) => action(value);

export default () => {

  const [foo, setFoo] = useState("");

  return (
    <pre>
      {`under consturct ...`}
      <br/>
      <br/>
      <input value={foo} placeholder="some text" onChange={withInputValue(setFoo)}/>
      <p>foo: {foo}</p>
    </pre>
  );
}