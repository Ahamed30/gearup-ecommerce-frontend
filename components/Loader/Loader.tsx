import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  borderWidth: "5px",
};

export const Loader = () => {
  return (
    <div className="fixed">
      <ClipLoader
        aria-label="Loading Spinner"
        color={"#fff"}
        cssOverride={override}
        data-testid="loader"
        loading={true}
        size={50}
        speedMultiplier={0.7}
      />
    </div>
  );
};
