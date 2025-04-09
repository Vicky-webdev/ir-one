import React from 'react';
import { PropertyFormData } from '../../types';

interface Props {
  formData: PropertyFormData;
  setFormData: React.Dispatch<React.SetStateAction<PropertyFormData>>;
  errors: { [key: string]: string };
}

const StepContact: React.FC<Props> = ({ formData, setFormData, errors }) => {
  return (
    <div className="space-y-6">
      {['name', 'email', 'mobile'].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={formData.contact[field as keyof typeof formData.contact]}
            onChange={(e) => setFormData({
              ...formData,
              contact: {
                ...formData.contact,
                [field]: e.target.value,
              },
            })}
          />
          {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
        </div>
      ))}
    </div>
  );
};

export default StepContact;