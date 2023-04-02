# KYC PEP check flow app

Fullstack Nuxt.js application to showcase a PEP check for a Norwegian company during a KYC flow.

## Description

It's a web application with limited functionality to showcase only the PEP check for a company by inputting its organization number.
<br/><br/>

### Possible scenario for the app:

Company X is Electrical Vehicle Charge Point Operator(EV CPO) that provides B2B services for big companies to operate EV charging at customers' offices/buildings.  
<br/>
Company X provides a web application to their customers in order to manage EV changers. One of the services that this application provides is easy management of payments for charging sessions. Companies that use Company X's product can easily handle payments for their employees and therefore save money and time. They can charge every employee based on their transactions during one month.  
<br/>
However, in order to get actual money from their employees and then pay for company's electricity bill, every company has to complete a KYC process to avoid money laundering and corruption. One part of the KYC process is to check that all board members of the company are not politically exposed people (PEP).  
<br/>

### Information about the data:

- This app uses https://www.brreg.no/ API to get information about board members of a Norwegian company by given organization number
- PEP dataset was obtained from https://www.opensanctions.org/ on 01.04.2023
- Data for this app includes only Norwegian PEP, extracted from the dataset described above  
  <br/>

## Installation instructions / How to run

- clone repository
- run the following commands in project's root folder

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Comments

Technologies used:

- Vue.js
- Nuxt.js
- express.js
- Prisma
- SQLite
