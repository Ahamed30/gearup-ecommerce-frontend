import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  borderWidth: "5px",
};

export const Loader = () => {
  return (
    <div className="fixed">
      <ClipLoader
        color={"#fff"}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.7}
        cssOverride={override}
      />
    </div>
  );
};
