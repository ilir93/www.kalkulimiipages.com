import React from 'react';

interface CountrySelectorProps {
  country: 'kosovo' | 'albania';
  onChange: (country: 'kosovo' | 'albania') => void;
}

export default function CountrySelector({ country, onChange }: CountrySelectorProps) {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => onChange('kosovo')}
        className={`flex-1 p-4 rounded-lg border-2 transition-all ${
          country === 'kosovo'
            ? 'border-blue-600 bg-blue-50'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <span className="text-2xl mb-2">🇽🇰</span>
        <h3 className="font-semibold">Kosovë</h3>
      </button>

      <button
        onClick={() => onChange('albania')}
        className={`flex-1 p-4 rounded-lg border-2 transition-all ${
          country === 'albania'
            ? 'border-blue-600 bg-blue-50'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <span className="text-2xl mb-2">🇦🇱</span>
        <h3 className="font-semibold">Shqipëri</h3>
      </button>
    </div>
  );
}