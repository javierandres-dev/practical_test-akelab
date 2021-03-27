export default function valueIsValid(value) {
  if (value === '') {
    return 'Error: Por favor ingrese un número entero igual o mayor a 1';
  } else if (isNaN(value)) {
    return `Error: "${value}" no es un número entero`;
  } else if (value.includes('.')) {
    return 'Error: Debe ingresar un número entero, no se acepta número flotante';
  } else if (value < 1) {
    return `Error: "${value}" no es un número igual o mayor a 1`;
  } else {
    return true;
  }
}
