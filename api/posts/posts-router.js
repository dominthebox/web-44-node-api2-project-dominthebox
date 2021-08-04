// implement your posts router here
const express =  require('express');
const Posts = require('./posts-model');

const router = express.Router()

router.get('/', async (req, res) =>{
    res.json('HAL HERE')
    // try {
    //     console.log('getting posts with async/await!')
    //     const posts = await Posts.find()
    //     res.status(200).json(posts)
    // } catch (err) {
    //     res.status(500).json({
    //         message: "The posts information could not be retrieved",
    //     })
    // }
})

router.get('/:id', (req, res) => {

})
router.post('/', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.get('/:id/messages', (req, res) => {

})


module.exports = router