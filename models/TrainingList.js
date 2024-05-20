import Training from './Training.js'

class TrainingList {
	static trainings = [
		new Training(1, 'Workout 1', 'Strong', [
			{ id: 1, name: 'Exercise 1', reps: 10, weight: 20 },
			{ id: 2, name: 'Exercise 2', reps: 12, weight: 0 },
			{ id: 3, name: 'Exercise 3', reps: 10, weight: 20 },
			{ id: 4, name: 'Exercise 4', reps: 12, weight: 25 },
		]),
	]

	static getAllTrainings() {
		return this.trainings
	}

	static addTraining(name, intensity) {
		const id = Date.now()
		const newTraining = new Training(id, name, intensity, [
			{ id: 1, name: 'Exercise 1', reps: 10, weight: 20 },
			{ id: 2, name: 'Exercise 2', reps: 12, weight: 0 },
			{ id: 3, name: 'Exercise 3', reps: 10, weight: 20 },
			{ id: 4, name: 'Exercise 4', reps: 12, weight: 25 },
		])
		this.trainings.push(newTraining)
		return newTraining
	}

	static getTrainingId(id) {
		return this.trainings.find(training => training.id == id)
	}

	static updateTraining(id, name, intensity) {
		const training = this.trainings.find(training => training.id === id)
		if (training) {
			training.name = name
			training.intensity = intensity
		}
		return training
	}

	static deleteTraining(id) {
		const index = this.trainings.findIndex(training => training.id === id)
		this.trainings.splice(index, 1)
	}

	static getExercise(trainingId, exerciseId) {
		const training = this.getTrainingId(trainingId)
		return training.exercises.find(ex => ex.id == exerciseId)
	}

	static updateExercise(trainingId, exerciseId, name, reps, weight) {
		const exercise = this.getExercise(trainingId, exerciseId)
		if (exercise) {
			exercise.name = name
			exercise.reps = reps
			exercise.weight = weight
			return exercise
		}
		return null
	}

	static deleteExercise(trainingId, exerciseId) {
		const training = this.getTrainingId(trainingId)
		const index = training.exercises.findIndex(ex => ex.id == exerciseId)
		training.exercises.splice(index, 1)
	}
}

export default TrainingList
