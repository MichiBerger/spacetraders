import Status from "./Status.js";

export default {
  title: 'Components/Status',
  component: Status
}

export const stateGreen = () => <Status isGreen/>
export const stateRed = () => <Status />