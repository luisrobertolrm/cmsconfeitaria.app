import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return null;
        }

        // Remove os caracteres não numéricos do CPF
        const cpf = control.value.replace(/\D/g, '');

        // Verifica se o CPF tem 11 dígitos
        if (cpf.length !== 11) {
            return { 'cpfInvalido': { value: control.value } };
        }

        // Verifica se o CPF é igual a todos os números iguais (ex: 111.111.111-11)
        if (/^(\d)\1+$/.test(cpf)) {
            return { 'cpfInvalido': { value: control.value } };
        }

        // Calcula os dígitos verificadores do CPF
        let digito1 = 0;
        let digito2 = 0;

        for (let i = 0; i <= 9; i++) {
            if(i<9) digito1 += parseInt(cpf[i]) * (10 - i);
            digito2 += parseInt(cpf[i]) * (11 - i);
        }

        digito1 = (digito1 % 11) < 2 ? 0 : 11 - (digito1 % 11);
        digito2 = (digito2 % 11) < 2 ? 0 : 11 - (digito2 % 11);

        // Verifica se os dígitos verificadores estão corretos
        if (digito1 !== parseInt(cpf[9]) || digito2 !== parseInt(cpf[10])) {
            return { 'cpfInvalido': { value: control.value } };
        } else {
            return null
        }
    }
}