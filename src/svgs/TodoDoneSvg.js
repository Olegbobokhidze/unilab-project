import React from "react";
import styled from "styled-components";
const Svg = styled.svg`
  @media screen and (min-width: 768px) {
    transform: scale(1.8);
  }
`;
const TodoDoneSvg = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.714"
      height="10.843"
      viewBox="0 0 24.714 17.843"
    >
      <path
        id="done_FILL0_wght400_GRAD0_opsz48_1_"
        data-name="done_FILL0_wght400_GRAD0_opsz48 (1)"
        d="M16.2,30.043l-8.5-8.5,1.632-1.632L16.2,26.778,30.781,12.2l1.632,1.632Z"
        transform="translate(-7.7 -12.2)"
        fill="#fff"
      />
    </Svg>
  );
};

export default TodoDoneSvg;
