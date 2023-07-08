function ler(){
    divstatus = document.getElementById('status');
    divstatus.innerHTML = 'carregando...';
    tabela = document.getElementById('tblprodutos');


    xhttp = XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readystate == 4 && this.status == 200){
            obj = JSON.parse(this.responseText);
            obj.array.forEach(prod => {
                if(document.getElementById('p'+prod.id) == null){
                    index = tabela.rows.length
                    row = tabela.insertRow(-1);
                    row.id = 'p'+prod.id;
                    cellID = row.insertCell(0);
                    cellNOME = row.insertCell(1);
                    cellPRECO = row.insertCell(2);
                    cellEXCLUIR = row.insertCell(3);
                    cellID.innerHTML = prod.id;
                    cellNOME.innerHTML = prod.nome;
                    cellPRECO.innerHTML = prod.preco;
                    cellEXCLUIR.innerHTML = 
                    "<button onclick='excluir(" + prod.id+")'>EXCLUIR</button>";                    
                }
            });
            divstatus.innerHTML = "";
        }
    };

    xhttp.open('GET','https://localhost:8001/produtos',true)
    xhttp.send()

}