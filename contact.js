// all the validation rules
const validationRules ={
    name:{
        regex: /^[A-Za-z\s]{2,30}$/,
        event: 'input',
        message: 'Name must be between 2-30 letters only and no numbers'
    },
    email:{
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        event: 'input',
        message: 'Please enter a valid email address'
    },
    phone:{
        regex:/^[\d\s\-+()]{10,15}$/,
        event: 'input',
        message: 'Please enter a valid number'
    },
    location:{
        regex: /^[A-Za-z\s,]{2,50}$/,
        event: 'input',
        message: 'Please enter a valid location'
    },
    message:{
        regex:/\S+/,
        event: 'input',
        message: 'Enter a your message'
    }
}


// find the field(input) and get it rules and make test on it 
function validate(fieldId, value){
    if (!validationRules[fieldId]){
        return true;
    }

    const rule = validationRules[fieldId];
    return rule.regex.test(value);
}


// show message error 
function showError(fieldId,message){
    const field = document.getElementById(fieldId);
    field.style.border = '2px solid #ff0000ff';
    
    // Create or update error message
    let errorElement = document.getElementById(fieldId+ '-error');
    if(!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = fieldId + '-error';
        errorElement.className = 'error-message';
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    errorElement.textContent = message;
}


// hide the the error message
function hideError(fieldId){
    const field = document.getElementById(fieldId);
    field.style.border = '';

    const errorElement = document.getElementById(fieldId + '-error');
    if (errorElement) {
        errorElement.remove();
    }    
}

//Connect validation to fields
function setupFieldValidation(fieldId) {
    const field = document.getElementById(fieldId);
    const rule = validationRules[fieldId];
    
    field.addEventListener(rule.event, function() {
        const isValid = validate(fieldId, this.value);
        
        if (isValid) {
            hideError(fieldId);
        } else {
            showError(fieldId, rule.message);
        }
    });
}

// Character counter for the textarea
function characterCounter(){
    const textEl = document.getElementById('message');
    const maxChar = 1000;
    // Create counter display
    const counter = document.createElement('span');
    counter.textContent = '(0/1000)';
    counter.className = 'counter';
    textEl.parentNode.insertBefore(counter, textEl.nextSibling);

    
    textEl.addEventListener('input',()=>{
        if (textEl.value.length > maxChar) {
            textEl.value = textEl.value.substring(0, maxChar);
        }

        counter.textContent = `(${textEl.value.length}/${maxChar})`;
    })
}


// show the input if the checkbox is other
const otherOption = document.getElementById('travel-experience-other');
const theOption = document.getElementById('travel-experience-other-text')
otherOption.addEventListener('input',()=>{
    if (otherOption.checked){
        theOption.style.display = 'block';
    }else{
        theOption.style.display = 'none';
    }
})


//  Initialize everything
function initValidation() {
    // Setup validation for each field in our rules
    Object.keys(validationRules).forEach(fieldId => {
        setupFieldValidation(fieldId);
    });
}

// Start the validation system when page loads
document.addEventListener('DOMContentLoaded',()=>{ 
    initValidation();
    characterCounter();
});

// Final validation on submit
document.getElementById('submit-button').addEventListener('click', function(e) {
    e.preventDefault();
    
    let allValid = true;
    Object.keys(validationRules).forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const isValid = validate(fieldId, field.value);
        
        if (!isValid) {
            showError(fieldId, validationRules[fieldId].message);
            allValid = false;
        }
    });
    
    if (allValid) {
        alert('🎉 Form submitted successfully!');
    }
});