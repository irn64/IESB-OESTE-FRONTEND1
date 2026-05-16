import { Router } from 'express'
import { prisma } from '../lib/prisma'

const router = Router()

router.get('/', async (req, res) => {
  let settings = await prisma.settings.findFirst()

  if (!settings) {
    settings = await prisma.settings.create({
      data: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15
      }
    })
  }

  return res.json(settings)
})

router.put('/', async (req, res) => {
  console.log(req.body)

  const { workTime, shortBreakTime, longBreakTime } = req.body

  if (
    typeof workTime !== 'number' ||
    typeof shortBreakTime !== 'number' ||
    typeof longBreakTime !== 'number'
  ) {
    return res.status(400).json({
      error: 'Valores inválidos'
    })
  }

  let settings = await prisma.settings.findFirst()

  if (!settings) {
    settings = await prisma.settings.create({
      data: {
        workTime,
        shortBreakTime,
        longBreakTime
      }
    })
  } else {
    settings = await prisma.settings.update({
      where: {
        id: settings.id
      },
      data: {
        workTime,
        shortBreakTime,
        longBreakTime
      }
    })
  }

  return res.json(settings)
})

export default router