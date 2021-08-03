// implement your posts router here
const express =  require('express');
const Posts = require('./posts-model');

const router = express.Router()


router.get('/api/posts', (req, res) => {
    Posts.find()
        .then(posts => {
            console.log(posts)
            // res.status(200).json(posts);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error retrieving the Posts',
            })
        })
})

router.get('/api/posts', async (req, res) =>{
    try {
        console.log('getting posts with async/await!')
        const posts = await Posts.find()
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({
            message: "The posts information could not be retrieved",
        })
    }
})


module.exports = router