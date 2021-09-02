    const MorningTeerResult = require('../../Model/PreviousResult/MorningTeerResult')
    const getMorningTeerResult =async(req, res) => {

       
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
       const moringteerresultlength= await MorningTeerResult.find()
         
       if(!moringteerresultlength){
                req.flash(
                            'error_msg',
                            err.message
                        );
                        res.redirect("/")
            }
              
       
       result.count = Math.ceil(moringteerresultlength.length/limit)
        if(endIndex<moringteerresultlength.length){
            result.next={
                page:page+1,
                limit:limit,
            }
        }

        

     result.morningteerresult= await MorningTeerResult.find({}).limit(limit).skip(startIndex).sort([['date', -1]]).exec()
     res.render("PreviewsResult/MorningTeerResult/ShowTeerResult", {
        result
       });

    }

    const getMorningSearchTeerResult =  async(req, res) => {
        try{
         if(!req.body.startdate && !req.body.enddate){
             req.flash(
                 'error_msg',
                 `please provide starting and ending date`
             );
             res.redirect("/previousmorningteerresult")
         }
         let result={}
         result.morningteerresult=await  MorningTeerResult.find({
             date: {
              $gte: req.body.startdate,
              $lt: req.body.enddate
             }
            })
 
            res.render("PreviewsResult/MorningTeerResult/ShowTeerResult", {
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

    const addMorningTeerResult = async (req, res) => {

        try {
            res.render("PreviewsResult/MorningTeerResult/AddTeerResult")
        } catch (error) {
            req.flash(
                'error_msg',
                error.message
            );
            res.redirect("/")
        }
    }


    
    const createMorningTeerResult = async (req, res) => {

        try {
          
            await MorningTeerResult.create(req.body.morningteerresult)
             req.flash(
                 'success_msg',
                 'Add successfully'
             );
            res.redirect("/previousmorningteerresult")
           
        } catch (error) {
           req.flash(
               'error_msg',
               error.message
           );
           res.redirect("/")
        }
    }

    const deleteMorningTeerResult = async (req, res) => {

        try {
            const foundmorningteerresult = await MorningTeerResult.findById(req.params.morningteerresult_id)
            if (!foundmorningteerresult) {
               req.flash(
                   'success_msg',
                   'Day Result  Not Found'
               );
               res.redirect("/")
            }
            foundmorningteerresult.deleteOne()
             req.flash(
                 'success_msg',
                 'delete successfully'
             );
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
        getMorningTeerResult,
         addMorningTeerResult,
         createMorningTeerResult,
         deleteMorningTeerResult,
         getMorningSearchTeerResult
    }