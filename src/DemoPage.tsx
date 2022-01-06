import { useState, FC } from "react";

type StringFunction = (a: String) => void;
const withInputValue = (action:StringFunction) => ({target:{value}}) => action(value);

export const DemoPage:FC = ({message}:{message:String}) => {

  const [foo, setFoo] = useState("");

  return (
    <pre>
      {`under consturct ...`}
      <br/>
      {message}
      <br/>
      <br/>
      <input value={foo} placeholder="some text" onChange={withInputValue(setFoo)}/>
      <p>foo: {foo}</p>
    </pre>
  );
}