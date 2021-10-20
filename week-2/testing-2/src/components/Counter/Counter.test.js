import {Counter} from "./Counter";
import { Renderer } from "react-dom";
import { fireEvent, render } from "@testing-library/react";

it("it should have default value as 0", ()=>{
    const {getByTestId,debug} = render(<Counter/>);
    debug()
    const countValue =getByTestId("count");
    expect(countValue).toHaveTextContent(0)
});

it("it should have increment and decrement button", ()=>{
    const {getAllByTestId,debug} = render(<Counter/>);
    //debug()
    const [inc,dec] =getAllByTestId("button");
    expect(inc).toHaveTextContent("increment")
    expect(dec).toHaveTextContent("decrement")
});

it("it should increment the count by clicking button", ()=>{
    const {getAllByTestId,getByTestId,debug} = render(<Counter/>);
    const [inc,dec] =getAllByTestId("button");
    //debug()
    fireEvent.click(inc)
    const constValue = getByTestId("count");
    expect(constValue).toHaveTextContent(1)
});