import { Decimal } from "@prisma/client/runtime";

export const NumberToCurrency = (number: Decimal) => Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(Number(number));
