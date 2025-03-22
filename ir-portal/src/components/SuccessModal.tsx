import React from 'react';

interface Props {
  resetForm: () => void;
}

const SuccessModal: React.FC<Props> = ({ resetForm }) => {
  return (
    <div id="successModal" className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-2xl text-green-600"></i>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Property Listed Successfully!</h3>
          <p className="text-gray-500 mb-6">Your property has been successfully listed on our platform.</p>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => {
              document.getElementById("successModal")?.classList.add("hidden");
              resetForm();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;