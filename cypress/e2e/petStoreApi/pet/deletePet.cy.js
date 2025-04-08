import { petData } from '../../../support/apiData/petData'; // Убедитесь, что путь корректный

describe('DELETE /pet/{petId}', () => {

        it('should return 200 OK when a pet is successfully deleted', () => {
            cy.request({
                method: 'DELETE',
                url: `https://petstore.swagger.io/v2/pet/${petData.id}`,
                headers: {
                    'api_key': 'special-key',
                },
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('should return 400 Invalid ID supplied if the pet ID is invalid', () => {
            const invalidPetId = 'invalid';

            cy.request({
                method: 'DELETE',
                url: `https://petstore.swagger.io/v2/pet/${invalidPetId}`,
                headers: {
                    'api_key': 'special-key',
                },
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(400);
            });
        });

        it('should return 404 Pet not found if the pet ID does not exist', () => {
            const nonExistentPetId = 9999999999999;

            cy.request({
                method: 'DELETE',
                url: `https://petstore.swagger.io/v2/pet/${nonExistentPetId}`,
                headers: {
                    'api_key': 'special-key',
                },
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(404);
            });
        });
    });