// implement your posts router here
const express =  require('express');
const Post = require('./posts-model');

const router = express.Router()

router.get('/', async (req, res) =>{
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({
            message: "The posts information could not be retrieved",
        })
    }
})

router.get('/:id', (req, res) => {
   Post.findById(req.params.id)
    .then(post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist",
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "The post information could not be retrieved",
        })
    })
})

router.post('/', (req, res) => {
    Post.insert(req.body)
        .then(post => {
            // an if statement to handle the two possible messages, will finish later today 
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "There was an error while saving the post to the database",
            })
        })

})

router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.get('/:id/messages', (req, res) => {

})


module.exports = router