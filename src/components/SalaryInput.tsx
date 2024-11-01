import React from 'react';

interface SalaryInputProps {
  amount: string;
  type: 'gross' | 'net';
  country: 'kosovo' | 'albania';
  onAmountChange: (value: string) => void;
  onTypeChange: (type: 'gross' | 'net') => void;
  onCalculate: () => void;
}

export default function SalaryInput({
  amount,
  type,
  country,
  onAmountChange,
  onTypeChange,
  onCalculate,
}: SalaryInputProps) {
  const currency = country === 'kosovo' ? '€' : 'ALL';

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="salary" className="font-medium text-gray-700">
          Shuma e pagës
        </label>
        <div className="relative">
          <input
            type="number"
            id="salary"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Shëno shumën"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {currency}
          </span>
        </div>
      </div>

      <div className="flex gap-4">
        <label className="flex-1">
          <input
            type="radio"
            className="sr-only peer"
            checked={type === 'gross'}
            onChange={() => onTypeChange('gross')}
          />
          <div className="p-3 text-center border-2 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:bg-gray-50">
            Bruto
          </div>
        </label>

        <label className="flex-1">
          <input
            type="radio"
            className="sr-only peer"
            checked={type === 'net'}
            onChange={() => onTypeChange('net')}
          />
          <div className="p-3 text-center border-2 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:bg-gray-50">
            Neto
          </div>
        </label>
      </div>

      <button
        onClick={onCalculate}
        className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Llogarit
      </button>
    </div>
  );
}