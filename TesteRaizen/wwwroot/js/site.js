$(function () {
    $("#Cep").mask('00000-000', { placeholder: "_____-___" });

    $("#Cep").on("blur", function () {
        var cep = $(this).val().replace('-', '')

        if (cep.length <= 0) {
            $("#rua").val("");
            return;
        }

        $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

            if (!("erro" in dados)) {
                $("#rua").val(dados.logradouro);
            } else {
                $("#rua").val("");
                alert("CEP não encontrado");
            }
        });
    });
});
