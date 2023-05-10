const Hoja = SpreadsheetApp.openById("1Zd6eGHriLZe4_62JgPd7nH3eUBZmjjsuR1YCniGx1f4").getActiveSheet();

function doGet(datos) {

  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("googel Apps Script");
}

function doPost(datos){

  return HtmlService.createTemplateFromFile("web").evaluate().setTitle("googel Apps Script");
}

//enlazar todos los archivos con la pagina de incio
function obtenerDatosHTML(nombre) {
  
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() {
  
  return Hoja.getDataRange().getValues();
}

function insertarContactos(nombre, correo, telefono){
  Hoja.appendRow([nombre, correo, telefono]);
}

function borrarContacto(numFila){
  Hoja.deleteRow(numFila);
}

function modificarContacto(numFila, datos){
  var celdas = Hoja.getRange("A" +numFila+ ":C" +numFila);
  celdas.setValues([[datos.nombre, datos.correo, datos.telefono]]);
}