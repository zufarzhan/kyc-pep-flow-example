const { PrismaClient } = require('@prisma/client')
const { Router } = require('express') 

const router = Router()
const prisma = new PrismaClient()

// get information about PEP by name, returns error if there is no PEP with provided name
router.get('/pep/:name', async (req, res) => {
  const pep = await prisma.pep.findFirst({
    where: {
      name: req.params.name
    }
  })

  pep ? res.json({ pep }) : res.status(404).json({ error: "There is no a politically exposed person with provided name." })
})


// get information about PEPs by provided semicolon separated list of names
router.get('/pep', async (req, res) => {

  const namesParam = req.query.names;
  if (namesParam) {
    const names = req.query.names.split(';');
    const peps = await prisma.pep.findMany({
      where: {
        name: { in: names }
      }
    })
  
    return peps ? res.json({ peps }) : res.status(404).json({ error: "No PEPs in the provided list of names." })
  }
  res.status(400).json({ error: "No names were provided." })
})

module.exports = router
