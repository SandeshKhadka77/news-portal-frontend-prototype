const modal = document.getElementById('newsModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

function openModal(id) {
  modal.classList.add('show');

  if (id === 1) {
    modalTitle.textContent = 'Nepal election: Youth participation reshapes political landscape';
    modalText.textContent = 'Across Nepal, youth voters are becoming increasingly influential in national politics. Student-led debates, digital campaigns, and civic awareness programs are reshaping how political parties communicate their agendas.';
  }

  if (id === 2) {
    modalTitle.textContent = 'Nepal cricket team announces final squad for T20 World Cup';
    modalText.textContent = 'The Cricket Association of Nepal has officially announced the squad for the upcoming T20 World Cup. The selection reflects a balance between emerging players and experienced performers.';
  }

  if (id === 3) {
    modalTitle.textContent = 'Government introduces long-term economic reform strategy';
    modalText.textContent = 'The government’s new reform strategy focuses on sustainable growth, employment generation, and foreign investment. Economists believe these reforms could strengthen Nepal’s long-term economic stability.';
  }

  if (id === 4) {
    modalTitle.textContent = 'Kathmandu air pollution sparks nationwide health concerns';
    modalText.textContent = 'Medical professionals warn that rising pollution levels during winter months are increasing respiratory illnesses, especially among children and elderly citizens.';
  }

  if (id === 5) {
    modalTitle.textContent = 'Tourism sector shows signs of recovery after challenging years';
    modalText.textContent = 'Nepal’s tourism sector is gradually rebounding with increased trekking activity, international arrivals, and renewed interest in adventure tourism.';
  }
}

function closeModal() {
  modal.classList.remove('show');
}