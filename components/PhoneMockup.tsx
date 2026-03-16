"use client";

import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export function PhoneMockup({ src, alt, className = "", imgClassName = "" }: PhoneMockupProps) {
  return (
    <div className={`phone-graphic ${className}`.trim()}>
      <div className="phone-case phone-case-black">
        <div className="phone-container-outer">
          <div className="phone-container-inner">
            <div className="phone-screen-content">
              <Image
                src={src}
                alt={alt}
                width={600}
                height={1000}
                unoptimized
                className={`phone-screen-img ${imgClassName}`.trim()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
