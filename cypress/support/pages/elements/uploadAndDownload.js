class uploadAndDownload {
    visit() {
        cy.visit('/upload-download')
    }

    downloadFile() {
        cy.get('#downloadButton')
            .should('be.visible')
            .invoke('attr', 'href')
            .then((href) => {
                cy.request(href)
                    .its('status')
                    .should('eq', 200);
            });

        cy.get('#downloadButton').click();
    }

    checkDownloadedFile(fileName = 'sampleFile.jpeg') {
        cy.readFile(`cypress/downloads/${fileName}`, { timeout: 10000 })
            .should('exist');
    }


    uploadFile() {
        cy.get('#uploadFile')
            .should('be.visible');
        const fileName = 'test-file.txt';
        cy.get('#uploadFile')
            .attachFile(fileName);
    }

    checkUploadedFile(fileName) {
        cy.get('#uploadedFilePath')
            .should('be.visible')
            .and('contain', fileName)
    }
}

export default new uploadAndDownload();