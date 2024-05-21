import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany

  return res.json(users)
})

app.post('/users', async (req, res) => {
  await prisma.user.create({
    data: {
      name: 'Rodolfo',
      email: 'rodolfo@email.com',
      age: '31'
    },
  })

  res.status(201).json({ message: 'Usuário criado com Sucesso!' })
})

app.put('/users', (req, res) => {
  res.send({ ok: true })
})

app.delete('/users', (req, res) => {
  res.send({ ok: true })
})

app.listen(3000)


async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })