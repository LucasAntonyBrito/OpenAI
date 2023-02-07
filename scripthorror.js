function clicou(){

    let topic = document.getElementById('topic').value
    let two = document.getElementById('two').value
  
    let chat = document.getElementById('chat');
    let body = `Topic: ${topic}\nTwo-Sentence Horror Story: ${two}: ` 
  
    fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        prompt: body,
        model: 'text-davinci-003',
        max_tokens: 4000
      })
    }).then(response => response.json())
      .then(data => {
        const text = data.choices;
        chat.innerHTML = `<p>${text[0].text}</p>`;
      });
  }

function instruçoes(){
  window.confirm("No campo “Topic” escreva o assunto principal da história. \nNo campo “Sentence” escreva algo que venha a ter na história, podendo conter até 2 frases.")
}