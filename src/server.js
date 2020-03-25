const router = require('./router');

const PORT = 8000;

router.listen(PORT, () => {
    console.log(`Service running on ${PORT}`);
});