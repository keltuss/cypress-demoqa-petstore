import { petData } from "../../../support/apiData/petData";

describe('POST /pet/{petId}/uploadImage', () => {
    it('Should successfully upload an image for the pet', () => {

        const petId = petData.id;
        cy.log(petId);

        cy.fixture('rex.jpg')
            .then((fileContent) => {
            const formData = new FormData();
            formData
                .append('file', new Blob([fileContent], { type: 'image/jpeg' }), 'rex.jpg');

            cy.request({
                method: 'POST',
                url: `https://petstore.swagger.io/v2/pet/${petId}/uploadImage`,
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });
});
