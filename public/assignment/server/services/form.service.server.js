/**
 * Created by PO on 3/23/2016.
 */
module.exports = function(app, model)
{
    app.get("/api/assignment/form", getAllForm);
    app.get("/api/assignment/user/:userId/form", getFormByUserId);
    app.get("/api/assignment/form/:formId", getFormByFormId);
    app.delete("/api/assignment/form/:formId", deleteFormByFormId);
    app.post("/api/assignment/user/:userId/form", addForm);
    app.put("/api/assignment/form/:formId", updateFormByFormId);

    function getAllForm(req, res)
    {
        model.findAllForm()
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }

    function getFormByUserId(req, res)
    {
        var userId = req.params["userId"];
        model.getFormByUserId(userId)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }

    function getFormByFormId(req, res)
    {
        var formId = req.params["formId"];
        model.getFormByFormId(formId)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }

    function deleteFormByFormId(req,res)
    {
        var formId = req.params["formId"];
        model.deleteFormByFormId(formId)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }

    function addForm(req, res)
    {
        var userId = req.params["userId"];
        var form = req.body;
        model.createForm(userId, form)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }

    function updateFormByFormId(req, res)
    {
        var id2 = req.params["formId"];
        var form = req.body;
        model.updateFormByFormId(id2,form)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }

}