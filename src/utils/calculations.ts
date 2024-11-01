export const calculateKosovoSalary = (amount: number, type: 'gross' | 'net') => {
  const calculateTax = (taxableAmount: number) => {
    let tax = 0;
    if (taxableAmount > 450) {
      tax += (taxableAmount - 450) * 0.1;
      taxableAmount = 450;
    }
    if (taxableAmount > 250) {
      tax += (Math.min(taxableAmount, 450) - 250) * 0.08;
      taxableAmount = 250;
    }
    if (taxableAmount > 80) {
      tax += (Math.min(taxableAmount, 250) - 80) * 0.04;
    }
    return tax;
  };

  if (type === 'gross') {
    const pensionEmployee = amount * 0.05;
    const taxableIncome = amount - pensionEmployee;
    const tax = calculateTax(taxableIncome);
    const net = amount - pensionEmployee - tax;

    return {
      gross: amount,
      net,
      deductions: {
        pension: {
          label: 'Kontributi Pensional (5%)',
          amount: pensionEmployee,
          percentage: 5
        },
        tax: {
          label: 'Tatimi në të Ardhura',
          amount: tax,
          percentage: ((tax / taxableIncome) * 100).toFixed(1)
        }
      }
    };
  } else {
    // Reverse calculation for net to gross
    let gross = amount;
    let calculated = calculateKosovoSalary(gross, 'gross');
    
    while (Math.abs(calculated.net - amount) > 0.01) {
      const diff = amount - calculated.net;
      gross += diff * 1.2;
      calculated = calculateKosovoSalary(gross, 'gross');
    }

    return calculated;
  }
};

export const calculateAlbaniaSalary = (amount: number, type: 'gross' | 'net') => {
  if (type === 'gross') {
    const socialEmployee = amount * 0.095;
    const healthEmployee = amount * 0.017;
    const net = amount - socialEmployee - healthEmployee;

    return {
      gross: amount,
      net,
      deductions: {
        social: {
          label: 'Sigurimet Shoqërore (9.5%)',
          amount: socialEmployee,
          percentage: 9.5
        },
        health: {
          label: 'Sigurimet Shëndetësore (1.7%)',
          amount: healthEmployee,
          percentage: 1.7
        }
      }
    };
  } else {
    // Reverse calculation for net to gross
    const gross = amount / 0.888; // 1 - 0.095 - 0.017 = 0.888
    return calculateAlbaniaSalary(gross, 'gross');
  }
};