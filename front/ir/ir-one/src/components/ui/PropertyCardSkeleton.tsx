const PropertyCardSkeleton = () => {
    return (
      <div className="animate-pulse bg-white rounded-xl shadow p-4 space-y-4">
        <div className="h-48 bg-gray-200 rounded-lg" />
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-300 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="flex justify-between">
          <div className="h-4 w-1/4 bg-gray-300 rounded" />
          <div className="h-4 w-1/4 bg-gray-300 rounded" />
        </div>
      </div>
    );
  };
  
  export default PropertyCardSkeleton;
  