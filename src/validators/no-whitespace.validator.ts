import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function NoWhitespace(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    // Registrerar en anpassad validator som kontrollerar att fältet
    // inte är tomt eller bara består av mellanslag.
    registerDecorator({
      name: 'noWhitespace',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        // Valideringslogiken: kollar att värdet är en sträng och att trim() ger längd > 0
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== 'string') return false;
          return value.trim().length > 0;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} får inte vara tomt eller bara ett mellanslag.`;
        },
      },
    });
  };
}
