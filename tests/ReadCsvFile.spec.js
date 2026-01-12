
import {test} from "@playwright/test"

import { parse } from "csv-parse/sync"

import fs from 'fs'

import  path  from 'path'


const readCsv = parse(fs.readFileSync( "./testData/testData2.csv"), {
    columns : true,
    skip_empty_lines : true,
    skip_records_with_empty_values : true,

    // delimiter : ","
    
})



// for (const element of readCsv) {

//      test(`Read the data dot env in ${element.Id}` , async ({page})=>{
    
//         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         await page.waitForTimeout(2000)
    
//         await page.getByPlaceholder('Username').fill(element.USERNAME)
//         await page.waitForTimeout(2000)
    
//         await page.getByPlaceholder('Password').fill(element.PASSWORD)
//         await page.waitForTimeout(2000)
    
//         await page.getByRole('button' , {name : " Login "}).click()
//         await page.waitForTimeout(2000)
    
//       }
//     )
    
// }


readCsv.forEach((csv)=>{
    test(`Read the data CSV in ${csv.Id}` , async ({page})=>{
    
        //browser launch
        await page.goto("https://www.demoblaze.com/")
    
        //enter credentials
        await page.click('[id="login2"]')
        await page.waitForTimeout(2000)
    
        await page.locator('[id="loginusername"]').fill(csv.USERNAME)
        await page.waitForTimeout(200 * 10)
    
        await page.locator('#loginpassword').fill(csv.PASSWORD)
        await page.waitForTimeout(200 * 10)
    
        await page.click('[onclick="logIn()"]')
        await page.waitForTimeout(200 * 10)

  })
})






