function doGet() {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("googel Apps Script");
}
//enlazar todos los archivos con la pagina de incio
function obtenerDatosHTML(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
