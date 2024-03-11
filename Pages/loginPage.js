export class loginPage{
    weblocators={
        userName:'#email',
        password:'#password',
        login:'.MuiButton-contained'
     
        
            
     }
    openURl(){

            cy.visit(Cypress.env('URL'))

    }   

    enterUserName(user){

        cy.get(this.weblocators.userName).type(user)
    }
    enterPassword(pass){

        cy.get(this.weblocators.password).type(pass)
    }
    click(login){

        cy.get(this.weblocators.login).click()
    }

    

}