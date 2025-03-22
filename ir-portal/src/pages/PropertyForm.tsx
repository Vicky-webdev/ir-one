// pages/PropertyForm.tsx
import React, { useState } from "react";
import StepBasicDetails from "../components/steps/StepBasicDetails";
import StepLocation from "../components/steps/StepLocation";
import StepMediaAmenities from "../components/steps/StepMediaAmenities";
import StepContact from "../components/steps/StepContact";
import SuccessModal from "../components/SuccessModal";
import { PropertyFormData } from "../types";

const PropertyForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<PropertyFormData>({
    basicDetails: {
      type: "",
      listingType: "Sale",
      price: "",
      area: "",
      bedrooms: "",
      furnishing: "Unfurnished",
      availability: "",
    },
    location: {
      address: "",
      city: "",
      state: "",
      pinCode: "",
      landmark: "",
    },
    media: [],
    amenities: [],
    description: "",
    contact: {
      name: "",
      email: "",
      mobile: "",
    },
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (step === 1) {
      if (!formData.basicDetails.type)
        newErrors.type = "Property type is required";
      if (!formData.basicDetails.price) newErrors.price = "Price is required";
      if (!formData.basicDetails.area) newErrors.area = "Area is required";
    } else if (step === 2) {
      if (!formData.location.address)
        newErrors.address = "Address is required";
      if (!formData.location.city) newErrors.city = "City is required";
      if (!formData.location.state) newErrors.state = "State is required";
      if (!formData.location.pinCode)
        newErrors.pinCode = "PIN code is required";
    } else if (step === 4) {
      if (!formData.contact.name) newErrors.name = "Name is required";
      if (!formData.contact.email) newErrors.email = "Email is required";
      if (!formData.contact.mobile)
        newErrors.mobile = "Mobile number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;
    try {
      const response = await fetch("/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const modal = document.getElementById("successModal");
        modal?.classList.remove("hidden");
      }
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Add New Property
          </h1>

          {/* Progress Step Indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-1/4 text-center ${
                    currentStep >= step ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                      currentStep >= step ? "bg-blue-600 text-white" : "bg-gray-200"
                    }`}
                  >
                    {step}
                  </div>
                  <span className="text-sm mt-2 block">
                    {step === 1 && "Basic Details"}
                    {step === 2 && "Location"}
                    {step === 3 && "Media & Amenities"}
                    {step === 4 && "Contact"}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Step Form Body */}
          <div className="mt-8">
            {currentStep === 1 && (
              <StepBasicDetails
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}
            {currentStep === 2 && (
              <StepLocation
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}
            {currentStep === 3 && (
              <StepMediaAmenities
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {currentStep === 4 && (
              <StepContact
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}

            {/* Buttons */}
            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              {currentStep < 4 ? (
                <button
                  className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={handleNext}
                >
                  Next
                </button>
              ) : (
                <button
                  className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  onClick={handleSubmit}
                >
                  Submit Property
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <SuccessModal resetForm={() => {
        setFormData({
          basicDetails: {
            type: "",
            listingType: "Sale",
            price: "",
            area: "",
            bedrooms: "",
            furnishing: "Unfurnished",
            availability: "",
          },
          location: {
            address: "",
            city: "",
            state: "",
            pinCode: "",
            landmark: "",
          },
          media: [],
          amenities: [],
          description: "",
          contact: {
            name: "",
            email: "",
            mobile: "",
          },
        });
        setCurrentStep(1);
      }} />
    </div>
  );
};

export default PropertyForm;
