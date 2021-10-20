import { Button } from "./button";
import  ReactDOM from "react-dom";
import {render,fireEvent,cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup)
it("should be render correctly with hello",()=>{
//     const screen = render(<Button/>);
//    expect(screen).toBeInTheDocument();
const {getByTestId}= render(<Button label="hello"/>);
const button = getByTestId("button");
expect(button).toHaveTextContent("hello")
});



it("show match snapshot",()=>{
    const fn = jest.fn();
    const tree = renderer
    .create(<Button label="hello x" onClick={fn}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
    })