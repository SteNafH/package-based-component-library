import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Module1Props {}

const StyledModule1 = styled.div`
  color: pink;
`;

export function Module1(props: Module1Props) {
  return (
    <StyledModule1>
      <h1>Welcome to Module1!</h1>
    </StyledModule1>
  );
}

export default Module1;
