/**
 * Created by PO on 3/23/2016.
 */
module.exports = function(app, model)
{
    app.get("/api/assignment/form/:formId/field", getFieldsForForm2);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFieldForForm);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldFromForm);
    app.post("/api/assignment/form/:formId/field", createFieldForForm);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateField);


    function getFieldsForForm2(req, res)
    {
        var formId = req.params["formId"];
        var fields = model.getFieldsForForm(formId);
        res.status(200).send(fields);

    }

    function updateField(req, res)
    {
        var formId = req.params["formId"];
        var fieldId = req.params["fieldId"];
        var newField = req.body;
        model.updateField(formId, fieldId, newField);
        res.status(200).send("");
    }

    function deleteFieldFromForm(req, res)
    {
        var formId = req.params["formId"];
        var fieldId = req.params["fieldId"];
        model.deleteFieldFromForm(formId, fieldId);
        res.status(200).send("");
    }

    function getFieldForForm(req, res)
    {
        var formId = req.params["formId"];
        var fieldId = req.params["fieldId"];
        var form = model.getFieldForForm(formId, fieldId);
        res.status(200).send(form);
    }

    function getFieldsForForm(req, res)
    {
        var formId2 = req.params["formId"];
        var fields = model.getFieldsForForm(formId2);
        res.status(200).send(fields);
    }

    function createFieldForForm(req, res)
    {
        var formId = req.params["formId"];
        var newField = req.body;
        model.createFieldForForm(formId, newField);
        res.status(200).send("");
    }

}