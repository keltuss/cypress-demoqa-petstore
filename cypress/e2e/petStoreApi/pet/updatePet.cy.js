import { petData } from "../../../support/apiData/petData";

describe('PUT /pet', () => {
    it('Should successfully update the pet data', () => {
        const updatedPetData = {
            ...petData,
            name: 'Max',
            status: 'sold'
        };

        cy.request({
            method: 'PUT',
            url: `https://petstore.swagger.io/v2/pet`,
            body: updatedPetData,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);

            expect(response.body).to.have.property('id', updatedPetData.id);
            expect(response.body).to.have.property('name', 'Max');
            expect(response.body).to.have.property('status', 'sold');
        });
    });
});