import { petData } from '../../../support/apiData/petData';

describe('POST /pet/{petId}', () => {
    it('should return 200 OK if the pet is successfully updated', () => {
        const updatedName = 'Updated Rex';
        const updatedStatus = 'sold';

        cy.request({
            method: 'POST',
            url: `https://petstore.swagger.io/v2/pet/${petData.id}`,
            form: true,
            body: {
                id: 12345,
                name: updatedName,
                status: updatedStatus,
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    })
});