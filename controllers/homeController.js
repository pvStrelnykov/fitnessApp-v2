import TrainingList from '../models/TrainingList.js'

class HomeController {
	getAllTrainings(req, res) {
		const trainings = TrainingList.getAllTrainings()
		res.render('home', { titlePage: 'Home', trainings })
	}

	renderAddTrainingPage(req, res) {
		res.render('add-workout', { titlePage: 'Add workout' })
	}

	addTraining(req, res) {
		const { title, intensity } = req.body
		TrainingList.addTraining(title, intensity)
		res.redirect('/')
	}

	renderEditTrainingPage(req, res) {
		const trainingId = parseInt(req.params.id)
		const training = TrainingList.getTrainingId(trainingId)

		res.render('edit-workout', { titlePage: 'Edit training', training })
	}

	updateTraining(req, res) {
		const trainingId = parseInt(req.params.id)
		const { title, intensity } = req.body
		TrainingList.updateTraining(trainingId, title, intensity)
		res.redirect('/')
	}

	deleteTraining(req, res) {
		const trainingId = parseInt(req.params.id)
		TrainingList.deleteTraining(trainingId)
		res.redirect('/')
	}
}

export default new HomeController()
