function include(filename)
{
    return HtmlService
        .createHtmlOutputFromFile(filename)
        .getContent();
}

function doGet(e)
{
  let page = e.parameter.page || "index";

  return HtmlService.createTemplateFromFile(page).evaluate()
    .setTitle('PVC danh bạ')
    .addMetaTag('viewport', 'width=device-width,initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}