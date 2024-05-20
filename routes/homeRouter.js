import { Router } from 'express'
import homeController from '../controllers/homeController.js'

const router = new Router()

router.get('/', homeController.getAllTrainings)
router.get('/add', homeController.renderAddTrainingPage)
router.post('/add', homeController.addTraining)
router.get('/edit/:id', homeController.renderEditTrainingPage)
router.post('/edit/:id', homeController.updateTraining)
router.get('/delete/:id', homeController.deleteTraining)

export default router
