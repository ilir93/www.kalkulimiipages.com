import React from 'react';

interface TaxDeduction {
  amount: number;
  rate: number;
}

interface KosovoResults {
  gross: number;
  net: number;
  deductions: {
    pension: TaxDeduction;
    tax: TaxDeduction;
  };
}

interface AlbaniaResults {
  gross: number;
  net: number;
  deductions: {
    social: TaxDeduction;
    health: TaxDeduction;
  };
}

type Results = KosovoResults | AlbaniaResults;

interface ResultsDisplayProps {
  results: Results | null;
  country: 'kosovo' | 'albania';
}

export default function ResultsDisplay({ results, country }: ResultsDisplayProps) {
  if (!results) return null;

  const currency = country === 'kosovo' ? '€' : 'ALL';

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const renderKosovoBreakdown = () => {
    const kosovoResults = results as KosovoResults;
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium text-lg mb-2">Paga Bruto:</p>
            <p className="text-2xl font-bold text-blue-700">{formatNumber(kosovoResults.gross)} {currency}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium mb-2">Zbritjet:</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Kontributi Pensional (5%)</span>
                <span className="font-medium">-{formatNumber(kosovoResults.deductions.pension.amount)} {currency}</span>
              </div>
              <div className="flex justify-between">
                <span>Tatimi në të Ardhura</span>
                <span className="font-medium">-{formatNumber(kosovoResults.deductions.tax.amount)} {currency}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium mb-2">Detajet e Tatimit:</p>
            <div className="space-y-1 text-sm">
              <p>• 0-80€: Pa tatim</p>
              <p>• 80-250€: 4% ({formatNumber((Math.min(250, Math.max(kosovoResults.gross - 80, 0)) * 0.04))} {currency})</p>
              <p>• 250-450€: 8% ({formatNumber((Math.min(450, Math.max(kosovoResults.gross - 250, 0)) * 0.08))} {currency})</p>
              <p>• Mbi 450€: 10% ({formatNumber(Math.max(0, (kosovoResults.gross - 450) * 0.1))} {currency})</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-medium text-lg mb-2">Paga Neto:</p>
            <p className="text-2xl font-bold text-green-700">{formatNumber(kosovoResults.net)} {currency}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderAlbaniaBreakdown = () => {
    const albaniaResults = results as AlbaniaResults;
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium text-lg mb-2">Paga Bruto:</p>
            <p className="text-2xl font-bold text-blue-700">{formatNumber(albaniaResults.gross)} {currency}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium mb-2">Zbritjet:</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Sigurimet Shoqërore (9.5%)</span>
                <span className="font-medium">-{formatNumber(albaniaResults.deductions.social.amount)} {currency}</span>
              </div>
              <div className="flex justify-between">
                <span>Sigurimet Shëndetësore (1.7%)</span>
                <span className="font-medium">-{formatNumber(albaniaResults.deductions.health.amount)} {currency}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium mb-2">Detajet e Kontributeve:</p>
            <div className="space-y-1 text-sm">
              <p>• Sigurime Shoqërore Punëmarrësi: 9.5%</p>
              <p>• Sigurime Shëndetësore Punëmarrësi: 1.7%</p>
              <p>• Totali i Kontributeve: 11.2%</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-medium text-lg mb-2">Paga Neto:</p>
            <p className="text-2xl font-bold text-green-700">{formatNumber(albaniaResults.net)} {currency}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8">
      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-lg font-medium mb-4">Detajet e Llogaritjes</h3>
        {country === 'kosovo' ? renderKosovoBreakdown() : renderAlbaniaBreakdown()}
      </div>
    </div>
  );
}