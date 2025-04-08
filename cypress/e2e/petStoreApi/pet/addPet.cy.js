import {petData} from "../../../support/apiData/petData";

describe('POST /pet', () => {
   it('Should successfully add a new pet', () => {
       cy.request({
           method: 'POST',
           url: 'https://petstore.swagger.io/v2/pet',
           body: petData,
           headers: {
               'Content-Type': 'application/json'
           }
       }).then((response) => {
           expect(response.status)
               .to.eq(200);
           expect(response.body)
               .to.have.property('id', petData.id);
           expect(response.body)
               .to.have.property('name', petData.name);
           expect(response.body.status)
               .to.eq('available');
           });
   });

    it('Should return 405 for invalid input', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet',
            body: petData,
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(405);
        });
    });
});