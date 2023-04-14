function doGet() {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("googel Apps Script");
}
//enlazar todos los archivos con la pagina de incio
function obtenerDatosHTML(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() {
  var hoja = SpreadsheetApp.openById(
    "1Zd6eGHriLZe4_62JgPd7nH3eUBZmjjsuR1YCniGx1f4"
  ).getActiveSheet();
  var datos = hoja.getDataRange().getValues();
  return datos;
}
