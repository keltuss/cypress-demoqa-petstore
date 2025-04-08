import webTablesPage from "../../../support/pages/elements/webTablesPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Web Tables Testing', () => {

    beforeEach(function ()  {
        cy.fixture('testData').as('data')
        webTablesPage.visit()
    })

    it('Searching', () => {
        webTablesPage.searchByName();
        webTablesPage.searchBySurname();
        webTablesPage.searchByAge();
        webTablesPage.searchByEmail();
        webTablesPage.searchBySalary();
        webTablesPage.searchByDepartment()
    })

    it('Adding person with valid info', function ()  {
        const user = this.data.webTables.validUser
        webTablesPage.clickAddButton();
        webTablesPage.addingPerson(user.name, user.lastName, user.email, user.age, user.salary, user.department);
        webTablesPage.clickSubmitButton();
        webTablesPage.formForAddingDisappeared();
    });

   it('Adding person with invalid info',  function () {
        const user = this.data.webTables.invalidUser
        webTablesPage.clickAddButton();
        webTablesPage.addingPerson(user.name, user.lastName, user.email, user.age, user.salary, user.department);
        webTablesPage.clickSubmitButton();
        webTablesPage.wrongEmailValidity();
        webTablesPage.wrongSalaryValidity();
    })

       it('Deleting', () => {
        webTablesPage.deletingPeopleFromTable();
    })

       it('Selecting rows', () => {
        webTablesPage.selectingRows();
    })
})
