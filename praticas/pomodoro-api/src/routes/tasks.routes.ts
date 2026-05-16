import { Router } from 'express'
import { prisma } from '../lib/prisma'

const router = Router()

router.get('/', async (req, res) => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      startDate: 'desc'
    }
  })

  return res.json(tasks)
})

router.post('/', async (req, res) => {
  const {
    id,
    name,
    duration,
    type,
    startDate
  } = req.body

  const task = await prisma.task.create({
    data: {
      id,
      name,
      duration,
      type,
      startDate: new Date(startDate)
    }
  })

  return res.status(201).json(task)
})

router.patch('/:id/complete', async (req, res) => {
  const { id } = req.params
  const { completeDate } = req.body

  const task = await prisma.task.update({
    where: {
      id
    },
    data: {
      completeDate: new Date(completeDate)
    }
  })

  return res.json(task)
})

router.patch('/:id/interrupt', async (req, res) => {
  const { id } = req.params
  const { interruptDate } = req.body

  const task = await prisma.task.update({
    where: {
      id
    },
    data: {
      interruptDate: new Date(interruptDate)
    }
  })

  return res.json(task)
})

router.delete('/', async (req, res) => {
  await prisma.task.deleteMany()

  return res.status(204).send()
})

export default router