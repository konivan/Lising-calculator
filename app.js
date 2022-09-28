// Обычные инпуты
const carPrice = document.getElementById('car-price');
const contribution = document.getElementById('contribution');
const time = document.getElementById('time');
const contributionInput = document.getElementById('contribution-sum');
// Слайдеры
const carPriceRange = document.getElementById('car-price-range');
const contributionRange = document.getElementById('contribution-range');
const timeRange = document.getElementById('time-range');
// Итоговые значения
const finalSum = document.getElementById('final-sum');
const paymentSum = document.getElementById('payment-sum');
const procent = 3.5;
const Btn = document.getElementById('Btn');

contribution.textContent = `${contributionRange.value}%`;

const assignValue = () => {
  carPrice.value = carPriceRange.value;
  contribution.textContent = contributionRange.value + '%';
  time.value = timeRange.value;
  paymentSum.textContent = Math.round(paymentSum.value);
  finalSum.textContent = Math.round(finalSum.value);
}

const normalizeValues = () => {
  if (carPrice.value < 1000000) {
    return carPrice.value = 1000000;
  } else if (carPrice.value > 6000000) {
    return carPrice.value = 6000000;
  } else if (contribution.textContent < 10) {
    return contribution.textContent = 10;
  } else if (contribution.textContent > 60) {
    return contribution.textContent = 60;
  } else if (time.value < 1) {
    return time.value = 1;
  } else if (time.value > 60) {
    return time.value = 60;
  }
}

const contributionSum = () => {
  return contributionInput.value = Math.round((Number(contribution.textContent.slice(0, -1)) / 100) * carPrice.value);
}

const monthPay = () => {
  return paymentSum.value =
    (carPrice.value - contributionInput.value) *
    ((0.035 * Math.pow(1 + 0.035, time.value)) / (Math.pow(1 + 0.035, time.value) - 1));
};

const lastSum = () => {
  return finalSum.value = Math.round(Number(contributionInput.value) + (time.value * monthPay()));
}

const collectData = () => {
  const data = {
    carPrice: carPrice.value,
    time: time.value,
    contributionInput: contributionInput.value,
    finalSum: finalSum.value,
    paymentSum: paymentSum.value,
  };
  console.log(data);
  Btn.disabled = true;
  return data;
};

carPriceRange.addEventListener('change', assignValue);
contributionRange.addEventListener('change', assignValue);
timeRange.addEventListener('change', assignValue);
contributionRange.addEventListener('change', contributionSum);
window.addEventListener('mousemove', monthPay);
window.addEventListener('mousemove', lastSum);

carPrice.addEventListener('change', normalizeValues);
contribution.addEventListener('change', normalizeValues);
time.addEventListener('change', normalizeValues);

Btn.addEventListener('click', collectData);



