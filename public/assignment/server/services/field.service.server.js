/**
 * Created by PO on 3/23/2016.
 */
module.exports = function(app, model)
{
    app.get("/api/assignment/form/:formId/field", getFieldsForForm);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFieldForForm);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldFromForm);
    app.post("/api/assignment/form/:formId/field", createFieldForForm);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateField);


    function getFieldsForForm(req, res)
    {
        var formId = req.params["formId"];
        model.getFieldsForForm(formId)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }

    function updateField(req, res)
    {
        var formId = req.params["formId"];
        var fieldId = req.params["fieldId"];
        var newField = req.body;



        model.updateField(formId, fieldId, newField)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }

    function deleteFieldFromForm(req, res)
    {
        var formId = req.params["formId"];
        var fieldId = req.params["fieldId"];
        model.deleteFieldFromForm(formId, fieldId)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }

    function getFieldForForm(req, res)
    {
        var formId = req.params["formId"];
        var fieldId = req.params["fieldId"];
        model.getFieldForForm(formId, fieldId)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }


    function createFieldForForm(req, res)
    {
        var formId = req.params["formId"];
        var newField = req.body;
        model.createFieldForForm(formId, newField)
            .then(function(response){
                res.status(200).send("");
            },function(err){
                res.status(400).send(err);
            });
    }

}