
import{test,expect} from '@playwright/test'
test("Find the product from search",async({page})=>{

    await page.goto("https://www.amazon.com/")
    await page.getByRole("searchbox",{name:"Search Amazon"}).fill("yoga mat")
    await page.keyboard.press("Enter") //Search and enter the Product name
   const secondprod =await page.getByRole("link",{name:"Sponsored Ad - Retrospec Solana Yoga Mat Thick 1/2in Non-Slip Workout Mat with Nylon Strap - 72x24in Exercise Mat for Pilates, Stretching & Fitness - BPA Free, Easy Clean"})
   expect(secondprod).toBeVisible()
   secondprod.click()

})