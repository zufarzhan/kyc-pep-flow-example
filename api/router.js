const { PrismaClient } = require('@prisma/client')
const { Router } = require('express') 
const axios = require('axios')

const router = Router()
const prisma = new PrismaClient()

// get information about the company roles and members by their org number from Brreg.no API 
router.get('/company-roles/:orgNumber', async (req, res, next) => {
  try {
    const roles = await axios.get(`https://data.brreg.no/enhetsregisteret/api/enheter/${req.params.orgNumber}/roller`)
    roles.data ? res.json({ ...roles.data }) : res.status(404).json({ message: "No information found about this company" })
  } catch {
    next(new Error('Something went wrong with retrieving data from Bregg'))
  }
})

// get information about PEP by name, returns error if there is no PEP with provided name
router.get('/pep/:name', async (req, res, next) => {
  try {
    const pep = await prisma.pep.findFirst({
      where: {
        name: req.params.name
      }
    })
    pep ? res.json({ pep }) : res.status(404).json({ message: "There is no a politically exposed person with provided name." })
  } catch {
    next(new Error('Something went wrong'))
  }
})


// get information about PEPs by provided semicolon separated list of names if there are any, otherwise returns an empty array
router.get('/pep', async (req, res, next) => {

  const namesParam = req.query.names;
  if (namesParam) {
    const names = req.query.names.split(';');
    try {
      const peps = await prisma.pep.findMany({
        where: {
          name: { in: names }
        }
      })
    
      return res.json({ peps })
    } catch {
      next(new Error('Something went wrong'))
    }
  }
  res.status(400).json({ message: "No names were provided." })
})

module.exports = router
