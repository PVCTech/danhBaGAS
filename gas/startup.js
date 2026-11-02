function include(filename)
{
    return HtmlService
        .createHtmlOutputFromFile(filename)
        .getContent();
}

function doGet()
{
    return HtmlService
        .createTemplateFromFile('index')
        .evaluate()
        .setTitle('PVC danh bạ')
        .setXFrameOptionsMode(
            HtmlService.XFrameOptionsMode.ALLOWALL
        );
}