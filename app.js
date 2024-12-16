function checkVowels() {
    let inputText = document.getElementById('inputText');
    let resultDiv = document.getElementById('result');
    let errorDiv = document.getElementById('error');
    let text = document.getElementById("text");
    text.textContent = "";
    resultDiv.textContent = '';
    errorDiv.textContent = '';
  
    if (!inputText.value) {
      errorDiv.textContent = 'Please enter some text.';
      return;
    }
  
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
  
    for (let i = 0; i < inputText.value.length; i++) {
      if (vowels.includes(inputText.value[i])) {
        count++;
      }
    }
  
    resultDiv.textContent = 'Number of vowels: ' + count;
    text.textContent = " in " + inputText.value;
  
    inputText.value = '';
  }