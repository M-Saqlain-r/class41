// Get elements
const tempRange = document.getElementById('tempRange');
const currentTemp = document.getElementById('currentTemp');
const powerBtn = document.getElementById('powerBtn');
const powerIndicator = document.getElementById('powerIndicator');
const powerStatus = document.getElementById('powerStatus');

// Function to update the temperature display
function updateTemperature() {
    const temperature = tempRange.value;
    currentTemp.textContent = `${temperature}°C`;
}

// Power button toggle functionality
let isPowerOn = true;
powerBtn.addEventListener('click', () => {
    if (isPowerOn) {
        powerIndicator.classList.remove('bg-green-500');
        powerIndicator.classList.add('bg-gray-500');
        powerStatus.textContent = 'Power Off';
        powerBtn.innerHTML = '<i class="fas fa-power-off text-red-500"></i>';
    } else {
        powerIndicator.classList.remove('bg-gray-500');
        powerIndicator.classList.add('bg-green-500');
        powerStatus.textContent = 'Power On';
        powerBtn.innerHTML = '<i class="fas fa-power-off text-gray-400"></i>';
    }
    isPowerOn = !isPowerOn;
});
