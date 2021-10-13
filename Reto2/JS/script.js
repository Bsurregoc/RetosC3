// FUNCIONES PARA LA TABLA COSTUME

function consultar_costume() {
    $.ajax (
            {
                url      : 'https://g290244b9fbd428-db202110032029.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume',
                type     : 'GET',
                dataType : 'json',
                success  :  function(json){                                
                                $("#idDivConsulta_costume").empty();
                                $("#idDivConsulta_costume").append("<table>");
                                $("#idDivConsulta_costume").append("<caption>Tabla de Disfraces</caption>");
                                $("#idDivConsulta_costume").append("<tr><th>Codigo</th><th>Marca</th><th>Modelo</th><th>Codigo de la marca</th><th>Nombre</th></tr>");
                                for (i=0; i<json.items.length; i++){
                                    $("#idDivConsulta_costume").append("<tr>");
                                    $("#idDivConsulta_costume").append("<td>" + json.items[i].id) + "</td>";
                                    $("#idDivConsulta_costume").append("<td>" + json.items[i].brand) + "</td>";
                                    $("#idDivConsulta_costume").append("<td>" + json.items[i].model) + "</td>";
                                    $("#idDivConsulta_costume").append("<td>" + json.items[i].category_id) + "</td>";
                                    $("#idDivConsulta_costume").append("<td>" + json.items[i].name) + "</td>";
                                    // $("#idDivConsulta_costume").append(json.items[i].codigo + json.items[i].nombre + " ")
                                    $("#idDivConsulta_costume").append("</tr>");
                                    }                                
                                console.log(json) 
                },
                error    :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function insertar_costume() {
    var disfraz;
    disfraz = {id:31 , brand:'ADULTO', model: 2019, category_id: 10, name: "BATMAN"};

    $.ajax (
            {
                url      : 'https://g290244b9fbd428-db202110032029.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume',
                type     : 'POST',
                data     :  disfraz,
                success  :  function(response){
                                console.log(response);
                },
                error    :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function borrar_costume() {
    //Se declara variable donde almacenaremos el codigo del disfraz
    var disfraz;
    // Se asigna el codigo a eliminar
    disfraz = {id: 31};
    //Se convierte a formato JSON
    datosEnvio = JSON.stringify(disfraz);
    $.ajax (
            {
                url          : 'https://g290244b9fbd428-db202110032029.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume',
                type         : 'DELETE',
                data         :  datosEnvio,
                contentType  : 'application/json',
                success      :  function(response){
                                console.log(response);
                },
                error        :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function actualizar_costume() {
    //Se declara variable donde almacenaremos los datos del planeta a modificar
    var disfraz;
    // Se asignan los nuevos valores del planeta
    disfraz = {id: 31, brand: "NUEVA MARCA",model: 2021, category_id: 10, name: "NUEVO BATMAN"};
    //Se convierte a formato JSON
    datosEnvio = JSON.stringify(disfraz);
    $.ajax (
            {
                url          : 'https://g290244b9fbd428-db202110032029.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume',
                type         : 'PUT',
                data         :  datosEnvio,
                contentType  : 'application/json',
                success      :  function(response){
                                console.log(response);
                },
                error        :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function consultar_Idcostume(){

    var codigo = $("#idCodigo_Costume").val();

    $.ajax (
        {
            url          : 'https://g290244b9fbd428-db202110032029.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume/' + codigo,
            type         : 'GET',
            dataType     : 'json',
            success      :  function(json){                                
                                $("#idDivConsulta_costume").empty();
                                for (i=0; i<json.items.length; i++){
                                    $("#idDivConsulta_costume").append(json.items[i].id + json.items[i].brand + json.items[i].model + json.items[i].category_id + json.items[i].name + " ")
                                    }                                
                                console.log(json) 
            },
            error        :  function(xhr,status){
                                console.log(xhr);
            }
        }        
    );
}


// FUNCIONES PARA LA TABLA CLIENT

function consultar_client() {
    $.ajax (
            {
                url      : 'https://g290244b9fbd428-db202110032029.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
                type     : 'GET',
                dataType : 'json',
                success  :  function(json){                                
                                $("#idDivConsulta_client").empty();
                                $("#idDivConsulta_client").append("<table>");
                                $("#idDivConsulta_client").append("<caption>Tabla de Clientes</caption>");
                                $("#idDivConsulta_client").append("<tr><th>Codigo</th><th>Nombre</th><th>Correo</th><th>Edad</th></tr>");
                                for (i=0; i<json.items.length; i++){
                                    $("#idDivConsulta_client").append("<tr>");
                                    $("#idDivConsulta_client").append("<td>" + json.items[i].id) + "</td>";
                                    $("#idDivConsulta_client").append("<td>" + json.items[i].name) + "</td>";
                                    $("#idDivConsulta_client").append("<td>" + json.items[i].email) + "</td>";
                                    $("#idDivConsulta_client").append("<td>" + json.items[i].age) + "</td>";                                  
                                    // $("#idDivConsulta_client").append(json.items[i].codigo + json.items[i].nombre + " ")
                                    $("#idDivConsulta_client").append("</tr>");
                                    }                                
                                console.log(json) 
                },
                error    :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function insertar_client() {
    // Variables que almacenan la informacion diligenciada por el usuario
    var codigo = $("#idCodigo_Client").val();
    var nombre = $("#idCodigo_Client_name").val();
    var correo = $("#idCodigo_Client_email").val();
    var edad = $("#idCodigo_Client_age").val();
    // Variable que almacena todos los datos en un diccionario
    var datos_cliente;
    datos_cliente = {id:codigo,name:nombre,email:correo,age:edad};

    $.ajax (
            {
                url      : 'https://g290244b9fbd428-db202110032029.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
                type     : 'POST',
                data     :  datos_cliente,
                success  :  function(response){
                                console.log(response);
                },
                error    :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function borrar_client() {    
    var codigo = $("#idCodigo_Client").val();
    //Se declara variable donde almacenaremos el codigo del disfraz
    var datos_cliente;
    // Se asigna el codigo a eliminar
    datos_cliente = {id: codigo};
    //Se convierte a formato JSON
    datosEnvio = JSON.stringify(datos_cliente);
    $.ajax (
            {
                url          : 'https://g290244b9fbd428-db202110032029.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
                type         : 'DELETE',
                data         :  datosEnvio,
                contentType  : 'application/json',
                success      :  function(response){
                                console.log(response);
                },
                error        :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function actualizar_client() {
    var codigo = $("#idCodigo_Client").val();
    var nombre = $("#idCodigo_Client_name").val();
    var correo = $("#idCodigo_Client_email").val();
    var edad = $("#idCodigo_Client_age").val();
    //Se declara variable donde almacenaremos los datos del planeta a modificar
    var datos_cliente;
    // Se asignan los nuevos valores del planeta
    datos_cliente = {id:codigo,name:nombre,email:correo,age:edad};
    //Se convierte a formato JSON
    datosEnvio = JSON.stringify(datos_cliente);
    $.ajax (
            {
                url          : 'https://g290244b9fbd428-db202110032029.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
                type         : 'PUT',
                data         :  datosEnvio,
                contentType  : 'application/json',
                success      :  function(response){
                                console.log(response);
                },
                error        :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function consultar_Idclient(){

    var codigo = $("#idCodigo_Client").val();

    $.ajax (
        {
            url          : 'https://g290244b9fbd428-db202110032029.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + codigo,
            type         : 'GET',
            dataType     : 'json',
            success      :  function(json){                                
                                $("#idDivConsulta_client").empty();
                                for (i=0; i<json.items.length; i++){
                                    $("#idDivConsulta_client").append(json.items[i].id + json.items[i].name + json.items[i].email + json.items[i].age + " ")
                                    }                                
                                console.log(json) 
            },
            error        :  function(xhr,status){
                                console.log(xhr);
            }
        }        
    );
}