import { useState } from "react";

interface ThumbnailProps {
  thumbnailUrl: string | undefined;
  className?: string;
}

const Thumbnail = ({ thumbnailUrl, className = "" }: ThumbnailProps) => {
  const [failedUrl, setFailedUrl] = useState<string>();
  const frameClassName = `aspect-square overflow-hidden bg-paper ${className}`;

  if (thumbnailUrl == null || failedUrl === thumbnailUrl) {
    return (
      <div
        data-testid="thumbnail-placeholder"
        className={`${frameClassName} flex items-center justify-center`}
      >
        <img src="/logo.png" alt="" className="h-1/2 w-1/2 opacity-25" />
      </div>
    );
  }

  return (
    <div className={`${frameClassName} flex items-center justify-center p-2`}>
      <img
        data-testid="thumbnail"
        src={thumbnailUrl}
        alt=""
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setFailedUrl(thumbnailUrl)}
        // BGG thumbnails are at most 200×150, so never scale them up.
        className="max-h-full max-w-full"
      />
    </div>
  );
};

export default Thumbnail;
