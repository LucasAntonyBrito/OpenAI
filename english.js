function traduzir(){
    let linguagem1 = document.getElementById("linguagem1").value
    let linguagem2 = document.getElementById("linguagem2").value
    let linguagem3 = document.getElementById("linguagem3").value

    let texto = document.getElementById("texto").value
    let res = document.getElementById("res")

    let body = `Translate this into 1. ${linguagem1}, 2. ${linguagem2} and 3. ${linguagem3}:\n\nEnglish: ${texto}\n\n1.`

      fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer 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'
            },
            body: JSON.stringify({
              prompt: body,
              model: 'text-davinci-003',
              max_tokens: 100
            })
          }).then(response => response.json())
            .then(data => {
              const text = data.choices;
              res.innerHTML += `<p>${text[0].text}</p>`;
            });
        }