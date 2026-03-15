import React from "react";
import { ShowCode } from "../../../components";
import { Avatar } from "oks-ui";

const brokenSrc = "https://example.com/does-not-exist.png";

const Fallback = () => {
  return (
    <ShowCode
      title="Fallbacks"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Avatar name="Omkar Sahu" />
          <Avatar />
          <Avatar src={brokenSrc} name="Broken (no fallback)" />
          <Avatar src={brokenSrc} name="Broken + showFallback" showFallback />
          <Avatar
            src={brokenSrc}
            name="Custom fallback"
            showFallback
            fallback={<span className="text-xs font-semibold">FB</span>}
          />
          <Avatar
            name="Custom icon"
            icon={<span className="text-sm">★</span>}
          />
        </div>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";

const brokenSrc = "https://example.com/does-not-exist.png";

<Avatar name="Omkar Sahu" />
<Avatar />
<Avatar src={brokenSrc} name="Broken (no fallback)" />
<Avatar src={brokenSrc} name="Broken + showFallback" showFallback />
<Avatar
  src={brokenSrc}
  name="Custom fallback"
  showFallback
  fallback={<span className="text-xs font-semibold">FB</span>}
/>
<Avatar name="Custom icon" icon={<span className="text-sm">★</span>} />`}
        </>
      }
    />
  );
};

export default Fallback;
