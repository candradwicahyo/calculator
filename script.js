window.onload = () => {
  
  const smallInput = document.querySelector('#small-input');
  const bigInput = document.querySelector('#big-input');
  
  const button = document.querySelectorAll('.button');
  button.forEach(btn => {
    btn.addEventListener('click', function() {
      const val = this.dataset.value;
      smallInput.value += val;
    });
  });
  
  function clear() {
    const button = document.querySelector('.button-clear');
    button.addEventListener('click', () => {
      smallInput.value = '';
      bigInput.value = '0';
    });
  }
  
  clear();
  
  function del() {
    const button = document.querySelector('.button-delete');
    button.addEventListener('click', () => {
      const value = smallInput.value.length;
      smallInput.value = smallInput.value.substr(0, value - 1);
    });
  }
  
  del();
  
  function total() {
    const button = document.querySelector('.button-equel');
    button.addEventListener('click', () => {
      if (smallInput.value) {
        const result = eval(smallInput.value);
        bigInput.value = result;
      }
    });
  }
  
  total();
  
}