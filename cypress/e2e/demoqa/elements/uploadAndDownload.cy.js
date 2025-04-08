import uploadAndDownload from "../../../support/pages/elements/uploadAndDownload";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Upload And Download Testing', () => {

    beforeEach(() => {
        uploadAndDownload.visit();
    })

    it('Download File', function () {
        uploadAndDownload.downloadFile();
        uploadAndDownload.checkDownloadedFile();
    });

    it('Upload File', function () {
        const fileName = 'test-file.txt';
        uploadAndDownload.uploadFile(fileName);
        uploadAndDownload.checkUploadedFile(fileName);
    });
})