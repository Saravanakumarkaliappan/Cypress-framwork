import { loginPage } from "../../../Pages/LoginPage"
const loginObj = new loginPage()
import TestData from '../../fixtures/TestData.json'

describe('homepageLogin', () => {
    it('Login',()=>{
        loginObj.openURl()
        loginObj.enterUserName(TestData.Name)
        loginObj.enterPassword(TestData.Password)
        loginObj.click()
    
    
    })
})
