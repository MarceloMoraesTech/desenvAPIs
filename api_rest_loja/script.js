function ler(){
    divstatus = document.getElementById('status');
    divstatus.innerHTML = 'carregando...';
    tabela = document.getElementById('tblprodutos');


    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            obj = JSON.parse(this.responseText);
            obj.forEach(prod => {
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
        if( this.readyState == 4 && this.status != 200){
            divstatus.innerHTML = this.responseText;
        }
    };

    xhttp.open('GET','https://localhost:8001/produtos',true)
    xhttp.send()

}