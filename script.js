window.onload = () => {
  
  const bigInput = document.querySelector('.big-input');
  const smallInput = document.querySelector('.small-input');
  const button = document.querySelectorAll('.btn-value');
  button.forEach(btn => {
    btn.addEventListener('click', function() {
      // isi dari atribut "data-value"
      const value = this.dataset.value;
      // masukkan isi atribut "data-value" kedalam small input
      smallInput.value += value;
    });
  });
  
  // tombol "clear"
  const clearButton = document.querySelector('.btn-clear');
  clearButton.addEventListener('click', clear);
  
  // tombol "delete"
  const deleteButton = document.querySelector('.btn-delete');
  deleteButton.addEventListener('click', () => {
    // value small input
    const value = smallInput.value;
    // hapus karakter input
    smallInput.value = value.substring(0, (value.length - 1));
  });
  
  const equalButton = document.querySelector('.btn-equal');
  equalButton.addEventListener('click', () => {
    // jumlahkan
    const result = eval(smallInput.value);
    // masukkan hasil kedalam big input
    bigInput.value = !result ? 0 : result;
  });
  
  function clear() {
    // bersihkan value input
    smallInput.value = '';
    bigInput.value = 0;
  }
  
}