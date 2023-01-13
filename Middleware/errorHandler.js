module.exports = (e,req,res,next)=>{
       console.log(e);
       res.status(400).send(`<html>
       <head></head>
       <h1>Bad Request</h1>
   </html>`);
}