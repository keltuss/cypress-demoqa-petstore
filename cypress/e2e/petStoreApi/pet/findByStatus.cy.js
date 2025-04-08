describe('GET /pet/findByStatus', () => {
    const statuses = ['available', 'pending', 'sold'];

    statuses.forEach((status) => {
        it(`should return pets with status "${status}"`, () => {
            cy.request({
                method: 'GET',
                url: `https://petstore.swagger.io/v2/pet/findByStatus`,
                qs: { status }, // query string
            }).then((response) => {
                expect(response.status)
                    .to.eq(200);
                expect(response.body).to.be.an('array');
                response.body.forEach((pet) => {
                    expect(pet.status).to.eq(status);
                });
            });
        });
    });

    it('Should return 400 for invalid status value', () => {
        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/pet/findByStatus`,
            qs: { status: 'invalidStatus' },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });
});