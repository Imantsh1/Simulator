import Constants from "./Constants";

function CalculateMonthly(rate, amount, deferredMonths, duration) {
    const monthlyRate = rate / 1200; // Convert the annual interest rate to a monthly interest rate
    const totalMonths = duration * 12; // Calculate the total number of months for the loan
    const numPayments = totalMonths - deferredMonths; // Calculate the number of payments (excluding deferred months)
    const numerator = amount * monthlyRate * Math.pow(1 + monthlyRate, numPayments); // Calculate the numerator of the loan payment formula
    const denominator = Math.pow(1 + monthlyRate, numPayments) - 1; // Calculate the denominator of the loan payment formula
    const monthlyPayment = numerator / denominator; // Calculate the monthly payment
    const deferredPayment = amount * monthlyRate * deferredMonths; // Calculate the deferred payment amount
    const totalMonthlyPayment = monthlyPayment + deferredPayment; // Calculate the total monthly payment (including deferred payments)
    return totalMonthlyPayment.toFixed(2); // Round the monthly payment to 2 decimal places
  }
  
  export default CalculateMonthly;