import * as React from "react";

function TruckIcon(props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 9l-2-4h-3V3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8l1 1h1.268a2 2 0 103.464 0h5.536a2 2 0 103.464 0H16V9zm-5 0V6h2.073l1.5 3H11z"
      />
    </svg>
  );
}

export default TruckIcon;