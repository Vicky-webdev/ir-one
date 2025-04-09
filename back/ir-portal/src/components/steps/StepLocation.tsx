import React from 'react';
import { PropertyFormData } from '../../types';

interface Props {
  formData: PropertyFormData;
  setFormData: React.Dispatch<React.SetStateAction<PropertyFormData>>;
  errors: { [key: string]: string };
}

const StepLocation: React.FC<Props> = ({ formData, setFormData, errors }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
        <textarea
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          rows={3}
          value={formData.location.address}
          onChange={(e) => setFormData({
            ...formData,
            location: { ...formData.location, address: e.target.value },
          })}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>
      <div className="grid grid-cols-2 gap-6">
        {['city', 'state', 'pinCode', 'landmark'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.location[field as keyof typeof formData.location]}
              onChange={(e) => setFormData({
                ...formData,
                location: {
                  ...formData.location,
                  [field]: e.target.value,
                },
              })}
            />
            {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepLocation;