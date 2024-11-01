import React, { useState, useEffect } from 'react';
import ResultsDisplay from './ResultsDisplay';

interface CalculatorProps {
  initialCountry?: 'kosovo' | 'albania';
}

export default function Calculator({ initialCountry = 'kosovo' }: CalculatorProps) {
  const [country, setCountry] = useState<'kosovo' | 'albania'>(initialCountry);
  const [salaryType, setSalaryType] = useState<'gross' | 'net'>('gross');
  const [salary, setSalary] = useState<string>('');
  const [results, setResults] = useState<any>(null);

  const calculateKosovoSalary = (amount: number, isGross: boolean) => {
    const pensionRate = 0.05;
    let gross: number;
    let net: number;

    if (isGross) {
      gross = amount;
      const pensionAmount = gross * pensionRate;
      const taxableIncome = gross - pensionAmount;
      
      let tax = 0;
      if (taxableIncome > 450) {
        tax += (taxableIncome - 450) * 0.1;
        tax += 200 * 0.08;
        tax += 170 * 0.04;
      } else if (taxableIncome > 250) {
        tax += (taxableIncome - 250) * 0.08;
        tax += 170 * 0.04;
      } else if (taxableIncome > 80) {
        tax += (taxableIncome - 80) * 0.04;
      }

      net = gross - pensionAmount - tax;

      return {
        gross,
        net,
        deductions: {
          pension: { amount: pensionAmount, rate: pensionRate },
          tax: { amount: tax, rate: tax / gross }
        }
      };
    } else {
      // Implement net to gross calculation if needed
      return null;
    }
  };

  const calculateAlbaniaSalary = (amount: number, isGross: boolean) => {
    const socialRate = 0.095;
    const healthRate = 0.017;
    let gross: number;
    let net: number;

    if (isGross) {
      gross = amount;
      const socialAmount = gross * socialRate;
      const healthAmount = gross * healthRate;
      net = gross - socialAmount - healthAmount;

      return {
        gross,
        net,
        deductions: {
          social: { amount: socialAmount, rate: socialRate },
          health: { amount: healthAmount, rate: healthRate }
        }
      };
    } else {
      // Implement net to gross calculation if needed
      return null;
    }
  };

  useEffect(() => {
    if (salary && !isNaN(Number(salary))) {
      const amount = Number(salary);
      const calculator = country === 'kosovo' ? calculateKosovoSalary : calculateAlbaniaSalary;
      const result = calculator(amount, salaryType === 'gross');
      setResults(result);
    } else {
      setResults(null);
    }
  }, [salary, salaryType, country]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          <div className="flex gap-4">
            <button
              onClick={() => setCountry('kosovo')}
              className={`flex-1 py-2 px-4 rounded-lg ${
                country === 'kosovo' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              🇽🇰 Kosovë
            </button>
            <button
              onClick={() => setCountry('albania')}
              className={`flex-1 py-2 px-4 rounded-lg ${
                country === 'albania' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              🇦🇱 Shqipëri
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setSalaryType('gross')}
              className={`flex-1 py-2 px-4 rounded-lg ${
                salaryType === 'gross' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              Bruto
            </button>
            <button
              onClick={() => setSalaryType('net')}
              className={`flex-1 py-2 px-4 rounded-lg ${
                salaryType === 'net' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              Neto
            </button>
          </div>

          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
              Shëno pagën ({country === 'kosovo' ? '€' : 'ALL'})
            </label>
            <input
              type="number"
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder={`Shëno pagën në ${country === 'kosovo' ? 'Euro' : 'Lek'}`}
            />
          </div>
        </div>
      </div>

      {results && <ResultsDisplay results={results} country={country} />}
    </div>
  );
}