const PropertyOverview = ({ title, location, budget, bhk, area }: any) => (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-600">{location}</p>
      <div className="flex gap-4 text-sm text-gray-700 pt-2">
        <span>💰 ₹{budget.toLocaleString()}</span>
        <span>🛏 {bhk}</span>
        <span>📐 {area} sqft</span>
      </div>
    </div>
  );
  
  export default PropertyOverview;
  