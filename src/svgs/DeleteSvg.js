import React from "react";
import styled from "styled-components";
const Svg = styled.svg`
  @media screen and (min-width: 768px) {
    transform: scale(1.5);
  }
`;
const DeleteSvg = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.296"
      height="20.333"
      viewBox="0 0 24.296 27.333"
    >
      <path
        id="delete_forever_FILL0_wght400_GRAD0_opsz48"
        d="M15.631,26.538l4.518-4.594L24.7,26.538l1.784-1.822L21.97,20.122l4.518-4.594L24.7,13.706,20.148,18.3l-4.518-4.594-1.822,1.822,4.556,4.594-4.556,4.594Zm-3.8,6.8a2.335,2.335,0,0,1-2.278-2.278V9.417H8V7.139h7.137V6H25.159V7.139H32.3V9.417H30.74V31.055a2.335,2.335,0,0,1-2.278,2.278ZM28.462,9.417H11.834V31.055H28.462Zm-16.628,0v0Z"
        transform="translate(-8 -6)"
        fill="#fff"
      />
    </Svg>
  );
};

export default DeleteSvg;
