import React from 'react';
import { PropertyFormData } from '../../types';

interface Props {
  formData: PropertyFormData;
  setFormData: React.Dispatch<React.SetStateAction<PropertyFormData>>;
  errors: { [key: string]: string };
}

const propertyTypes = ['Apartment', 'Villa', 'Plot', 'Commercial', 'House'];
const furnishingTypes = ['Unfurnished', 'Semi-Furnished', 'Fully Furnished'];

const StepBasicDetails: React.FC<Props> = ({ formData, setFormData, errors }) => {
  const { basicDetails } = formData;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Type
          </label>
          <select
            value={basicDetails.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                basicDetails: { ...basicDetails, type: e.target.value },
              })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">Select Type</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
        </div>

        {/* Listing Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Listing Type
          </label>
          <div className="flex space-x-4">
            {['Sale', 'Rent'].map((type) => (
              <button
                key={type}
                className={`flex-1 py-2 px-4 rounded-lg border ${
                  basicDetails.listingType === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() =>
                  setFormData({
                    ...formData,
                    basicDetails: { ...basicDetails, listingType: type },
                  })
                }
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            type="text"
            value={basicDetails.price}
            onChange={(e) =>
              setFormData({
                ...formData,
                basicDetails: { ...basicDetails, price: e.target.value },
              })
            }
            placeholder="Enter price"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        {/* Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Area (sq.ft)
          </label>
          <input
            type="text"
            value={basicDetails.area}
            onChange={(e) =>
              setFormData({
                ...formData,
                basicDetails: { ...basicDetails, area: e.target.value },
              })
            }
            placeholder="Enter area"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area}</p>}
        </div>

        {/* Bedrooms (only for non-Plot/Commercial) */}
        {basicDetails.type !== 'Plot' && basicDetails.type !== 'Commercial' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bedrooms
            </label>
            <select
              value={basicDetails.bedrooms}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  basicDetails: { ...basicDetails, bedrooms: e.target.value },
                })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Select</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} BHK
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Furnishing (hide only for Plot) */}
        {basicDetails.type !== 'Plot' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Furnishing
            </label>
            <select
              value={basicDetails.furnishing}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  basicDetails: { ...basicDetails, furnishing: e.target.value },
                })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              {furnishingTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepBasicDetails;
