    const NoonTeerResult = require('../../Model/PreviousResult/NoonTeerResult')
    const getNoonTeerResult =  async(req, res) => {
       
        const page=parseInt(req.query.page)

        const limit=parseInt(req.query.limit)

        const startIndex=(page-1)*limit

        const endIndex=page*limit;
    
        let result={}

        

        if(startIndex>0){
            result.previous={
                page:page-1,
                limit:limit,
            }
        }
       const noonteerresultlength= await NoonTeerResult.find()
         
       if(!noonteerresultlength){
                req.flash(
                            'error_msg',
                            err.message
                        );
                        res.redirect("/")
            }
              
       
       result.count = Math.ceil(noonteerresultlength.length/limit)
        if(endIndex<noonteerresultlength.length){
            result.next={
                page:page+1,
                limit:limit,
            }
        }

        

     result.noonteerresult= await NoonTeerResult.find({}).limit(limit).skip(startIndex).sort([['date', -1]]).exec()
     res.render("PreviewsResult/NoonTeerResult/ShowTeerResult", {
        result
       });


    
    }


    const getNoonSearchTeerResult =  async(req, res) => {
       try{
        if(!req.body.startdate && !req.body.enddate){
            req.flash(
                'error_msg',
                `please provide starting and ending date`
            );
            res.redirect("/previousnoonteerresult")
        }
        let result={}
         
      result.noonteerresult=await  NoonTeerResult.find({
            date: {
             $gte: req.body.startdate,
             $lt: req.body.enddate
            }
           })

           res.render("PreviewsResult/NoonTeerResult/ShowTeerResult", {
            result
                })
       }catch(error){
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
       }
    }

    const addNoonTeerResult = async (req, res) => {

        try {
            res.render("PreviewsResult/NoonTeerResult/AddTeerResult")
        } catch (error) {
           req.flash(
               'error_msg',
               error.message
           );
           res.redirect("/")
        }
    }


    
    const createNoonTeerResult = async (req, res) => {
        try {


            await NoonTeerResult.create(req.body.noonteerresult)
             req.flash(
                 'success_msg',
                 'created successfully'
             );
            res.redirect("/previousnoonteerresult")
           
        } catch (error) {
           req.flash(
               'error_msg',
               error.message
           );
           res.redirect("/")
        }
    }

    const deleteNoonTeerResult = async (req, res) => {

        try {
            const foundnoonteerresult = await NoonTeerResult.findById(req.params.noonteerresult_id)
            if (!foundnoonteerresult) {
                 req.flash(
                     'success_msg',
                     '  Not Found'
                 );
                 res.redirect("/")
            }
            req.flash(
                'success_msg',
                ' delete successfully'
            );
            foundnoonteerresult.deleteOne()
            res.redirect("back")
        } catch (error) {
            req.flash(
                'error_msg',
                error.message
            );
            res.redirect("/")

        }
    }

    // //exporting
    module.exports = {
        getNoonTeerResult,
        addNoonTeerResult,
        createNoonTeerResult,
        deleteNoonTeerResult,
        getNoonSearchTeerResult
    }