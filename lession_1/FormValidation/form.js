// đối tượng validator
function Validator(options) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {};

    function errorResolve(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        errorElement.innerText = '';
        getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
    }
    //ham thuc hien validate (xac dinh)
    function validate(inputElement, rule) {
        //var errorElement = getParent(inputElement, '.form-group')
        var errorMessage;
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)

        //lay ra cac rules cua selector
        var rules = selectorRules[rule.selector];

        //lap qua tung rule va kiem tra
        //neu co loi thif dung kiem tra
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        }
        else {
            errorResolve(inputElement, rule);
        }

        return !errorMessage;
    }

    // lay element cua form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {

        //khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            //lap qua tung rules va validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });



            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                    

                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                } 

                                values[input.name].push(input.value)
                                break;
                                case 'file':
                                    values[input.name] = input.files
                                    break;
                            default:
                                values[input.name] = input.value
                        }

                        return values;
                    }, {});

                    options.onSubmit(formValues);
                }
            }

        }

        //xu ly lap qua moi rule va xu ly lang nghe su kien

        options.rules.forEach(function (rule) {

            //luu lai cac rules cho moi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                // xu li truong hop blur khoi input 
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                //xu li khi nguoi dung nhap
                inputElement.oninput = function () {
                    errorResolve(inputElement, rule);
                }
            })
        })
    }
}

//định nghĩa rules
//guyên tắc của các rules:
//1. Khi có lỗi thì trả về message lỗi
//2. KHi hợp lệ -> k trả về j cả (undefined)
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : 'Vui long nhap thong tin'
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Truong nay phai la email'
        }
    };
}

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Mat khau toi thieu ${min} ky tu`
        }
    };
}
Validator.isConfirmPassword = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || `Gia tri nhap vao khong chinh xac`
        }
    };
}