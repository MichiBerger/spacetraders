import { screen, render } from "@testing-library/react";
import Status from "./Status.js";

describe('Status', () => {
  it('renders without error', () => {
    render(<Status />)
  })

  it('shows a green state with isGreen={true}', () => {
    render(<Status isGreen={true}/>)
    const status = screen.getByText("green")
    expect(status).toBeInTheDocument()
  })
})