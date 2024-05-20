import express from 'express'
import trainingController from '../controllers/trainingController.js'
const router = express.Router();

router.get('/:trainingId/exercises', trainingController.getAllExercises)
router.get('/:trainingId/exercise/:exerciseId/edit', trainingController.renderEditExercisePage)
router.post('/:trainingId/exercise/:exerciseId/edit', trainingController.updateExercise)
router.get('/:trainingId/exercise/:exerciseId/delete', trainingController.deleteExercise)

export default router;
