export default function calculateIRRFDiscount(
  salary: number,
  socialSecurityDiscount: number,
  numberDependents: number
) {
  let discount = 0, aliquot = 0, deduction = 0;
  let dependentDeduction = 164.56;

  switch (true) {
    case (salary < 1903):
      aliquot = 0;
      discount = 0;
      break;
    case (salary < 2826):
      aliquot = 0.075;
      deduction = 142.8;
      break;
    case (salary < 3751):
      aliquot = 0.15;
      deduction = 354.8;
      break;
    case (salary < 4664):
      aliquot = 0.225;
      deduction = 636.13;
      break;
    default:
      aliquot = 0.275;
      deduction = 869.36;
      break;
  }

  if (aliquot !== 0) {
    const baseSalary = (salary - socialSecurityDiscount) - (dependentDeduction * numberDependents);

    discount = (baseSalary * aliquot) - deduction;
  }

  return discount;
}
