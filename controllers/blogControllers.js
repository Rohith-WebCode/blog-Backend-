const post = require('../model/postSchema')

const getPost = async (req,res)=>{

    try {
       const data = await post.find({})
        if(!data){
             return res.status(404).json({success:false,mesg:"No posts found"})   
        }
         res.status(200).json({success:true,data:data})

    } catch (error) {
        console.log(error);  
        res.status(500).json({ success: false, msg: 'Server error' }); 
    } 
}

const newPost = async(req,res)=> {
    try {
        const newPost = new post({
            title: req.body.title,
            content : req.body.content,
            author : req.user,
            tags : req.body.tags,
            createdAt : new Date()
        })
       await newPost.save()
       res.status(200).json({ success: true, msg: "Post created successfully", data: newPost });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Server error' });
    }
}

const updatePost = async(req,res)=>{
    try {
        const {id} = req.params
        const data = await post.findById(id)

        if(!data){
            return res.status(404).json({success:false,mesg:"No posts found"})   
        }

        data.title = req.body.title || data.title
        data.content = req.body.content || data.content
        data.author = req.body.author || data.author
        data.tags = req.body.tags || data.tags

        await data.save()
        
        res.status(200).json({ success: true, msg: "post get successfully", data: data });
    } catch (error) {  
        console.error(error);
        res.status(500).json({ success: false, msg: 'Server error' });
    }
}

const deletePost = async(req,res)=>{
    try {
        const {id} = req.params
        
        const deletedPost  = await post.findByIdAndDelete(id)
        if(!deletePost){
                return res.status(404).json({success:false,mesg:"No posts found"})   
            }
        res.status(200).json({ success: true, msg: "Post deleted successfully", data: deletedPost});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Server error' });
    }
}

const myPosts = async (req,res) =>{
    const id = req.user
    // console.log(id);
    try {
        const mypost = await post.find({author:id}) 
        if(!mypost) return res.status(404).json({success:false,mesg:"No posts found"})   

        res.status(200).json({ success: true,data: mypost});
        
    } catch (error) {
          console.error(error);
        res.status(500).json({ success: false, msg: 'Server error' });
    }
    
}


module.exports = {newPost,getPost,updatePost,deletePost,myPosts}