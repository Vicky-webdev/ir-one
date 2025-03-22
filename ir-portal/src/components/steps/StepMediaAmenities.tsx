import React from 'react';
import { PropertyFormData } from '../../types';

interface Props {
  formData: PropertyFormData;
  setFormData: React.Dispatch<React.SetStateAction<PropertyFormData>>;
}

const StepMediaAmenities: React.FC<Props> = ({ formData, setFormData }) => {
  const amenitiesList = [
    'Swimming Pool', 'Gym', 'Garden', 'Security', 'Power Backup',
    'Parking', 'Club House', 'Kids Play Area', 'Lift', 'Tennis Court'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        media: [...Array.from(e.target.files)],
      });
    }
  };

  const handleAmenityToggle = (amenity: string) => {
    const updated = formData.amenities.includes(amenity)
      ? formData.amenities.filter((a) => a !== amenity)
      : [...formData.amenities, amenity];
    setFormData({ ...formData, amenities: updated });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Media</h3>
        <input type="file" multiple accept="image/*,video/*" onChange={handleFileChange} />
        <div className="grid grid-cols-4 gap-4 mt-4">
          {formData.media.map((file, idx) => (
            <img key={idx} src={URL.createObjectURL(file)} alt="preview" className="h-24 object-cover" />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenitiesList.map((amenity) => (
            <label key={amenity} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.amenities.includes(amenity)}
                onChange={() => handleAmenityToggle(amenity)}
              />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepMediaAmenities;