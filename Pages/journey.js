const journey = document.querySelector('.journey');
const currentStep = journey?.querySelector('.step.current');

if (journey && currentStep) {
  currentStep.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'center' });
}