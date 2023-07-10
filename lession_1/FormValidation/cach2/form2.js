function Validator(formSelector, options) {
    //gán giá trị mặc định hco tham số (ES5)
    if (!options) {
        options = {}
    }

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var formRules = {}

    /**
     * Quy ước tạo rule:
     * 1. Nếu có lỗi thì return error message
     * 2. Nếu k có lỗi thì return undefined
     */
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui long nhap truong nay'
        },

        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Truong nay phai la email'
        },

        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Mat khau phai lon hon ${min} ky tu`
            }
        },

        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Mat khau phai nho hon ${max} ky tu`
            }
        }
    }

    //lấy ra form element trong DOM theo formSelector
    var formElement = document.querySelector(formSelector);

    //chi xu ly khi co element trong DOM
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {

            var rules = input.getAttribute('rules').split('|')

            for (var rule of rules) {

                var ruleInfo;
                var isRuleHasValue = rule.includes(':')

                if (isRuleHasValue) {
                    ruleInfo = rule.split(':')
                    rule = ruleInfo[0] //chữ min
                }

                var ruleFunc = validatorRules[rule]

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]) //số 3
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name] = [ruleFunc]
                }
            }

            //lang nghe su kien để validate (blur, change)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }
        //hàm thực hiện validate
        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;

            for (var rule of rules) {
                errorMessage = rule(event.target.value);
                if (errorMessage) break;
            }

            //neu co loi -> hien thij mess loi ra UI
            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group')

                if (formGroup) {
                    formGroup.classList.add('invalid')
                    var formMessage = formGroup.querySelector('.form-message')
                    if (formMessage) {
                        formMessage.innerText = errorMessage
                    }
                }
            }
            return !errorMessage
        }

        //hàm clear message
        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group')
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid')

                var formMessage = formGroup.querySelector('.form-message')
                if (formMessage) {
                    formMessage.innerText = ''
                }
            }
        }
    }

    //xu ly khi submit form
    formElement.onSubmit = function (event) {
        event.preventDefault()

        console.log(this);
        return;

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;

        for (var input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false
            }
        }

        //khi k co loi thi submit form
        if (isValid) {
            // Trường hợp submit với javascript
            if (typeof options.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]');
                var formValues = Array.from(enableInputs).reduce(function (values, input) {

                    switch (input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break;
                        case 'checkbox':
                            if (!input.matches(':checked')) {
                                values[input.name] = '';
                                return values;
                            }
                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            }
                            values[input.name].push(input.value);
                            break;
                        case 'file':
                            values[input.name] = input.files;
                            break;
                        default:
                            values[input.name] = input.value;
                    }

                    return values;
                }, {});
                options.onSubmit(formValues);
            }
            // Trường hợp submit với hành vi mặc định
            else {
                formElement.submit();
            }
        }
    }


}