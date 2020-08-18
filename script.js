function isCpfValid(cpf) {
    const CPFLENGTH = 11;

    if(cpf.length != CPFLENGTH) {
        return false;
    }

    let areDigitsEqual = 1;

    for (let i = 0; i < cpf.length - 1; i++) {
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            areDigitsEqual = 0;
            break;
        }
    }

    if (!areDigitsEqual) {
        let numbers = cpf.substring(0, 9);
        let digits = cpf.substring(9);
        let sum = 0;

        for (let i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
        }

        let result = (sum % CPFLENGTH) < 2 ? 0 : CPFLENGTH - (sum % CPFLENGTH);

        if (result != digits.charAt(0)) {
            return false;
        }

        numbers = cpf.substring(0, 10);
        sum = 0;


        for (let j = 11; j > 1; j--) {
            sum += numbers.charAt(11 - j) * j;
        }


        result = sum % CPFLENGTH < 2 ? 0 : CPFLENGTH - (sum % CPFLENGTH);

        if (result != digits.charAt(1)){
            return false;
        }

        return true;
    }
}



function validateCpf() {

    let cpf = document.getElementById('cpf_digitado').value;
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    let validationResult = isCpfValid(cpf);

    if(validationResult) {
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
}
