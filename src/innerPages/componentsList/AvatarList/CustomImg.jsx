import React from "react";
import { ShowCode } from "../../../components";
import { Avatar } from "oks-ui";

const GrayscaleImg = React.forwardRef((props, ref) => {
  return (
    <img
      {...props}
      ref={ref}
      style={{ filter: "grayscale(1)", ...(props.style ?? {}) }}
    />
  );
});

GrayscaleImg.displayName = "GrayscaleImg";

const CustomImg = () => {
  return (
    <ShowCode
      title="Custom image"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Avatar
            name="imgProps"
            src="https://i.pravatar.cc/150?img=5"
            imgProps={{
              loading: "lazy",
              decoding: "async",
              referrerPolicy: "no-referrer",
              alt: "Avatar photo",
            }}
          />
          <Avatar
            name="ImgComponent"
            src="https://i.pravatar.cc/150?img=5"
            ImgComponent={GrayscaleImg}
            imgProps={{
              referrerPolicy: "no-referrer",
            }}
          />
        </div>
      }
      code={
        <>
          {`import React from "react";
import { Avatar } from "oks-ui";

const GrayscaleImg = React.forwardRef((props, ref) => {
  return (
    <img
      {...props}
      ref={ref}
      style={{ filter: "grayscale(1)", ...(props.style ?? {}) }}
    />
  );
});

GrayscaleImg.displayName = "GrayscaleImg";

<Avatar
  name="imgProps"
  src="https://i.pravatar.cc/150?img=5"
  imgProps={{
    loading: "lazy",
    decoding: "async",
    referrerPolicy: "no-referrer",
    alt: "Avatar photo",
  }}
/>

<Avatar
  name="ImgComponent"
  src="https://i.pravatar.cc/150?img=5"
  ImgComponent={GrayscaleImg}
  imgProps={{
    referrerPolicy: "no-referrer",
  }}
/>`}
        </>
      }
    />
  );
};

export default CustomImg;
