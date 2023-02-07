function clicou(){

    let campoNomeFilme = document.getElementById("campoNomeFilme").value
    let res = document.getElementById("res")

    let body = `Convert movie titles into emoji.\n\n${campoNomeFilme}:`

    fetch("https://api.openai.com/v1/completions", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer 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'
            },
            body: JSON.stringify({
              prompt: body,
              model: 'text-davinci-003',
              temperature:0.76,
              max_tokens:60,
              top_p:1,
              frequency_penalty:0,
              presence_penalty:0,
              stop:["\n"]
            })
          }).then(response => response.json())
            .then(data => {
              const text = data.choices;
              res.innerHTML = `<p>${text[0].text}</p>`;
            });
        }
        