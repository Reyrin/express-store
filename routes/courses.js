const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.render('courses', {
		title: 'Ваши курсы',
		isCourses: true
	});
});

module.exports = router;