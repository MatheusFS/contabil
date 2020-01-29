export default function styleWrongFields(errors){
    
    for(const field in errors){
        const message = errors[field].message;
        const helperTextSelector = document.querySelector(`#${field} + label + .helper-text`);
        if(helperTextSelector != null){

            helperTextSelector.setAttribute('data-error', message);
        }
        document.getElementById(field).classList.add('invalid');
    }
}