// src/components/shimmer/DetailPageShimmers.tsx

const shimmerBase = "bg-gray-300 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:400%_100%] motion-safe:animate-shimmer";

const ImageBannerShimmer = () => (
  <div className={`w-full h-64 md:h-96 rounded-lg mb-4 ${shimmerBase}`} />
);

const OverviewShimmer = () => (
  <div className="space-y-4 p-4 motion-safe:animate-fadeIn motion-safe:animate-slideUp">
    <div className="h-6 w-3/4 rounded bg-gray-300" />
    <div className="h-4 w-full rounded bg-gray-200" />
    <div className="h-4 w-5/6 rounded bg-gray-200" />
  </div>
);

const AmenitiesShimmer = () => (
  <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 motion-safe:animate-fadeIn motion-safe:animate-slideUp">
    {Array(8).fill(0).map((_, i) => (
      <div key={i} className="h-6 rounded bg-gray-200" />
    ))}
  </div>
);

const MapShimmer = () => (
  <div className="h-64 rounded bg-gray-300 motion-safe:animate-fadeIn motion-safe:animate-slideUp" />
);

const ContactAgentShimmer = () => (
  <div className="space-y-3 p-4 motion-safe:animate-fadeIn motion-safe:animate-slideUp">
    <div className="h-5 w-1/3 rounded bg-gray-300" />
    <div className="h-10 w-full rounded bg-gray-200" />
    <div className="h-10 w-full rounded bg-gray-200" />
  </div>
);

export {
  ImageBannerShimmer,
  OverviewShimmer,
  AmenitiesShimmer,
  MapShimmer,
  ContactAgentShimmer,
};
