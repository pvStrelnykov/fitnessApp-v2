import TrainingList from '../models/TrainingList.js'

class TrainingController {
	getAllExercises(req, res) {
		const trainingId = req.params.trainingId
		const training = TrainingList.getTrainingId(trainingId)

		res.render('exercises', {
			titlePage: 'Exercises',
			exercises: training.exercises,
			training
		})
	}

	renderEditExercisePage(req, res) {
		const trainingId = req.params.trainingId;
		const exerciseId = req.params.exerciseId;
		const training = TrainingList.getTrainingId(trainingId);
		const exercise = TrainingList.getExercise(trainingId, exerciseId);
		if (exercise) {
			res.render('edit-exercise', { 
				titlePage: 'Edit Exercise', 
				exercise, 
				training
			});
		} else {
			res.status(404).send('Exercise not found');
		}
	}

	updateExercise(req, res) {
		const trainingId = req.params.trainingId
		const exerciseId = req.params.exerciseId
		const { name, reps, weight } = req.body;

		const updatedExercise = TrainingList.updateExercise(trainingId, exerciseId, name, reps, weight);
		if (!updatedExercise) {
			return res.status(404).send('Exercise not found');
		}

		res.redirect(`/training/${trainingId}/exercises`);
	}

	deleteExercise(req, res) {
    const trainingId = req.params.trainingId;
    const exerciseId = req.params.exerciseId;
    TrainingList.deleteExercise(trainingId, exerciseId)

    res.redirect(`/training/${trainingId}/exercises`)
	}
}

export default new TrainingController()
