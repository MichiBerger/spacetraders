import styled from "styled-components";

export default function Status({ isGreen }) {
  return (
    <Wrapper>
      <p>Status:</p> 
      <StatusDot isGreen={isGreen}></StatusDot>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 12px;
  background-color: #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StatusDot = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => props.isGreen ? 'green' : 'crimson'};
  border-radius: 50%;
`;
