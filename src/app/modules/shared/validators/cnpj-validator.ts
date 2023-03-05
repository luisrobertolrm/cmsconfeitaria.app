import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[cnpjValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CnpjValidatorDirective, multi: true }]
})
export class CnpjValidatorDirective implements Validator {
  @Input() cnpjValidator?: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    // remover pontos e hífens do número de CNPJ
    const cnpj = control.value.replace(/[.-]/g, '');

    // verificar se o número de CNPJ é composto por 14 dígitos
    if (cnpj.length !== 14) {
      return { invalidCnpj: true };
    }

    // calcular o primeiro dígito verificador
    let sum = 0;
    let factor = 5;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj.charAt(i)) * factor;
      factor = (factor === 2) ? 9 : factor - 1;
    }
    let firstDigit = sum % 11 < 2 ? 0 : 11 - sum % 11;

    // calcular o segundo dígito verificador
    sum = 0;
    factor = 6;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj.charAt(i)) * factor;
      factor = (factor === 2) ? 9 : factor - 1;
    }
    let secondDigit = sum % 11 < 2 ? 0 : 11 - sum % 11;

    // verificar se os dígitos verificadores calculados são iguais aos dígitos verificadores do número de CNPJ
    if (firstDigit !== parseInt(cnpj.charAt(12)) || secondDigit !== parseInt(cnpj.charAt(13))) {
      return { invalidCnpj: true };
    }

    return null;
  }
}
