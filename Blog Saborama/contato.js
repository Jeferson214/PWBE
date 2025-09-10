document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formContato');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        const dataHora = new Date().toLocaleString();

        const conteudo =
`Data/Hora: ${dataHora}
Nome: ${nome}
E-mail: ${email}
Assunto: ${assunto}
Mensagem:
${mensagem}
-----------------------------`;

        const blob = new Blob([conteudo], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'mensagem_contato.txt';
        a.click();

        URL.revokeObjectURL(url);

        alert("Mensagem processada! O arquivo foi baixado.");
        form.reset();
    });
});
