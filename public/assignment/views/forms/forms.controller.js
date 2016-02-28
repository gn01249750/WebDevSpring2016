/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope,FormService, $rootScope)
    {
        var forms =[];
        allForms();
        $scope.addForm = addForm
        $scope.selectForm = selectForm
        $scope.deleteForm = deleteForm

        $scope.updateForm = updateForm
        var selectedForm = null;

        function deleteForm(form)
        {
            FormService.deleteFormById(form._id, function() {});
            allForms();
        }

        function selectForm(index)
        {
            $scope.formInputField = forms[index].title;
            selectedForm = forms[index];
        }

        function allForms()
        {
            FormService.findAllFormsForUser($rootScope.currentUser._id,setAllfomrs);
        }

        function setAllfomrs(data)
        {
            forms = data;
            $scope.allFormsByUser = forms;
        }

        function addForm(formInputField)
        {
            FormService.createFormForUser($rootScope.currentUser._id,formInputField,addToForms);

        }

        function addToForms(data)
        {
            forms.push(data);
        }

        function updateForm(formInputField)
        {
            if(selectedForm != null){
                var newForm =
                {
                    _id: selectedForm._id,
                    title: formInputField,
                    userId: selectedForm.userId
                };
                FormService.updateFormById(selectedForm._id, newForm,updateFormHelper);
            }
        }

        function updateFormHelper(data)
        {
            selectedForm = null;
        }






    }
})();