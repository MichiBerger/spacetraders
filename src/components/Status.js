import styled from 'styled-components';
import PropTypes from 'prop-types';

Status.propTypes = {
  isGreen: PropTypes.bool,
};

export default function Status({ isGreen }) {
  return (
    <Wrapper>
      <p>Status:</p>
      <StatusDot isGreen={isGreen}>
        <span className="sr-only">{isGreen ? 'green' : 'red'}</span>
      </StatusDot>
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
  background-color: ${props => (props.isGreen ? 'green' : 'crimson')};
  border-radius: 50%;
`;
