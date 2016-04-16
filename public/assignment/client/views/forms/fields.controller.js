/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController($routeParams, FieldService, $scope)
    {
        $scope.allFieldsInForm = null;
        $scope.chosenField = null;
        $scope.chosenFormIndex = -1;
        getFormForFields();
        $scope.addField = addField;
        $scope.deleteField = deleteField;
        $scope.passArgs = passArgs;
        $scope.updateFromModal = updateFromModal;

        function updateFromModal(newField)
        {
            var formId = $routeParams.formId;
            var fieldId = newField._id;
            if(newField.options){
                newField.options = newField.options.toString().split("\n");
            }else{
                newField.options = [];
            }
            console.log(newField);
            FieldService
                .updateField(formId, newField._id, newField)
                .then(function(response){
                    //$scope.allFieldsInForm[$scope.chosenFormIndex] = newField;
                    getFormForFields();
                    $scope.chosenFormIndex = -1;
                    $scope.chosenField = null;
                })
        }

        function passArgs(index)
        {
            var tempString = null;
            if($scope.allFieldsInForm[index].options.length>0){
                tempString = $scope.allFieldsInForm[index].options[0].label;
                for(i = 1; i < $scope.allFieldsInForm[index].options.length; i++){
                    tempString = tempString + "\n" + $scope.allFieldsInForm[index].options[i].label;
                }
            }
            var newField =
            {   "_id": $scope.allFieldsInForm[index]._id,
                "label": $scope.allFieldsInForm[index].label,
                "type": $scope.allFieldsInForm[index].type,
                "placeholder": $scope.allFieldsInForm[index].placeholder,
                "options": tempString
            };
            $scope.chosenFormIndex = index;
            $scope.chosenField = newField;
        }

        function deleteField(index)
        {
            var formId = $routeParams.formId;
            var fieldId = $scope.allFieldsInForm[index]._id;
            FieldService
                .deleteFieldFromForm(formId, fieldId)
                .then(function(response){
                    $scope.allFieldsInForm.splice(index,1);
                })
        }

        function getFormForFields()
        {
            var formId = $routeParams.formId;
            if(formId)
            {
                FieldService
                    .getFieldsForForm(formId)
                    .then(function(response){
                        if(response.data)
                        {
                            $scope.allFieldsInForm = response.data;
                        }
                    })
            }
        }

        function addField(newField)
        {
            var formId = $routeParams.formId;
            var field = null;
            if(newField == "singleLineOption"){
                field = {"_id": null, "label": "New Text Field", "type": "TEXT", "placeholder": "New Field"};
            }else if(newField == "Date"){
                field = {"_id": null, "label": "New Date Field", "type": "DATE"};
            }else if(newField == "Dropdown"){
                field =
                {"_id": null, "label": "New Dropdown", "type": "OPTIONS", "options": [
                    {"label": "Option 1", "value": "OPTION_1"},
                    {"label": "Option 2", "value": "OPTION_2"},
                    {"label": "Option 3", "value": "OPTION_3"}
                ]};
            }else if(newField == "ParagraphText"){
                field = {"_id": null, "label": "New Text Field", "type": "TEXTAREA", "placeholder": "New Field"};
            }else if(newField == "Checkboxes"){
                field =
                {"_id": null, "label": "New Checkboxes", "type": "CHECKBOXES", "options": [
                    {"label": "Option A", "value": "OPTION_A"},
                    {"label": "Option B", "value": "OPTION_B"},
                    {"label": "Option C", "value": "OPTION_C"}
                ]};

            }else{
                field =
                {"_id": null, "label": "New Radio Buttons", "type": "RADIOS", "options": [
                    {"label": "Option X", "value": "OPTION_X"},
                    {"label": "Option Y", "value": "OPTION_Y"},
                    {"label": "Option Z", "value": "OPTION_Z"}
                ]}
            }

            FieldService
                .createFieldForForm(formId, field)
                .then(function(response){
                    getFormForFields();
                })
        }


    }
})();