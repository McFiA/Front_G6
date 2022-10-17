//CRUD

function getCategoria (){
    $.ajax({
        url:"http://129.159.39.128/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            
            pintarCategoria(respuesta);
        }
    });

}

function postCategoria(){

    if($("#name").val().length==0 || $("#description").val().length==0 ){
        alert("Todos los campos son obligatorios");
    }else{
    
    let cajas = {
        name:$("#name").val(),
        description:$("#description").val()
    };
    $.ajax({
        url:"http://129.159.39.128/api/Category/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente la categoria");
            window.location.reload();
    
            }
        });
    }
}

function putCategoria(idDesdeBoton){
    console.log(idDesdeBoton);
    if($("#name").val().length==0 || $("#description").val().length==0 ){
        alert("Todos los campos son obligatorios");
    }else{
    
    let cajas = {
        id:idDesdeBoton,
        name:$("#name").val(),
        description:$("#description").val()
    };
    $.ajax({
        url:"http://129.159.39.128/api/Category/update",
        type:"PUT",
        datatype:"JSON",
        contentType:"application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente la informacion de la categoria");
            window.location.reload();
    
            }
        });
    }
    

}

function deleteCategoria(idDesdeBoton){
  
    let myData={
        id:idDesdeBoton
    };
    $.ajax({
        url:"http://129.159.39.128/api/Category/"+idDesdeBoton,
        type:"DELETE",
        datatype:"JSON",
        data: JSON.stringify(myData),
        contentType:"application/json",
        success:function(respuesta){
            alert("se borro correctamente la categoria");
            window.location.reload();
        }
    });

}

////////////////////////////////////////////

function pintarCategoria(respuesta){
    //console.log(respuesta);
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='putCategoria("+respuesta[i].id+")'> Actualizar</button>"
        myTable+="<td> <button onclick='deleteCategoria("+respuesta[i].id+")'> Borrar</button>"
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);


}