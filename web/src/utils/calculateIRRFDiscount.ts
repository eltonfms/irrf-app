export default function calculateIRRFDiscount(
  salary: number,
  aliquot: number,
  installment: number
) {
  let discount = 0;
  
  if (aliquot !== 0) {
    discount = (salary * aliquot) - installment;
  }

  return discount;
}
