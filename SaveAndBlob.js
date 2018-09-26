function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}

// Generate screenshot and download
html2canvas(document.body).then(function(canvas) {
    // Generate the base64 representation of the canvas
    var base64image = canvas.toDataURL("image/png");

    // Split the base64 string in data and contentType
    var block = base64image.split(";");
    // Get the content type
    var mimeType = block[0].split(":")[1];// In this case "image/png"
    // get the real base64 content of the file
    var realData = block[1].split(",")[1];// For example:  iVBORw0KGgouqw23....

    // Convert b64 to blob and store it into a variable (with real base64 as value)
    var canvasBlob = b64toBlob(realData, mimeType);

    // Generate file download
    window.saveAs(canvasBlob, "yourwebsite_screenshot.png");
});