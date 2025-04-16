// src/pages/properties/[id].tsx

// Individual Property Page


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Property } from "../../components/ui/PropertyCard";
import ImageBanner from "../../components/propertyDetail/ImageBanner";
import PropertyOverview from "../../components/propertyDetail/PropertyOverview";
import Amenities from "../../components/propertyDetail/Amenities";
import MapSection from "../../components/propertyDetail/MapSection";
import ContactAgent from "../../components/propertyDetail/ContactAgent";
import ShimmerLoader from "../../components/ui/PropertyCardSkeleton";


const PropertyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await import("../../data/mockProperties.json");
      const found = data.default.find((item) => item.id === parseInt(id || "0"));
      setProperty(found || null);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    document.title = "Property Details | Dream Homes";
  }, []);

  if (loading) return <ShimmerLoader />;
  if (!property) return <p className="text-center mt-6">Property not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow">
      <div className="mb-4 text-sm text-blue-600 cursor-pointer hover:underline" onClick={() => navigate(-1)}>
          ← Back to Listings
        </div>

        <ImageBanner image={property.image} />
      <PropertyOverview {...property} />
      <Amenities />
      <MapSection />
      <ContactAgent />
          </div>
  );
};

export default PropertyDetailPage;
