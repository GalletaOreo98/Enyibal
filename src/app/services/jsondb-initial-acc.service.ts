import { Injectable } from '@angular/core';
import { IAccount } from "./models";

@Injectable({
  providedIn: 'root'
})
export class JsondbInitialAccService {

  private accounts: IAccount[] = [
    {
      "idAccountingAccount": 1,
      "code": "A",
      "name": "Activo",
      "AccountingAccount": 0
    },
    {
      "idAccountingAccount": 2,
      "code": "P",
      "name": "Pasivo",
      "AccountingAccount": 0
    },
    {
      "idAccountingAccount": 3,
      "code": "PN",
      "name": "Patrimonio",
      "AccountingAccount": 0
    },
    {
      "idAccountingAccount": 122,
      "code": "ER",
      "name": "Estado de resultados",
      "AccountingAccount": 0
    },
    {
      "idAccountingAccount": 4,
      "code": "AC",
      "name": "Activo corriente",
      "AccountingAccount": 1
    },
    {
      "idAccountingAccount": 5,
      "code": "ANC",
      "name": "Activo no corriente",
      "AccountingAccount": 1
    },
    {
      "idAccountingAccount": 6,
      "code": "PC",
      "name": "Pasivo corriente",
      "AccountingAccount": 2
    },
    {
      "idAccountingAccount": 7,
      "code": "PNC",
      "name": "Pasivo no corriente",
      "AccountingAccount": 2
    },
    {
      "idAccountingAccount": 8,
      "code": "PNCI",
      "name": "Comerciante individual",
      "AccountingAccount": 3
    },
    {
      "idAccountingAccount": 9,
      "code": "PNEJ",
      "name": "Empresa Jurídica (sociedad)",
      "AccountingAccount": 3
    },
    {
      "idAccountingAccount": 10,
      "code": "EEF",
      "name": "Efectivo y equivalente al efectivo",
      "AccountingAccount": 4
    },
    {
      "idAccountingAccount": 11,
      "code": "INVERS",
      "name": "Inversiones",
      "AccountingAccount": 4
    },
    {
      "idAccountingAccount": 12,
      "code": "CC",
      "name": "Cuentas y documentos por cobrar",
      "AccountingAccount": 4
    },
    {
      "idAccountingAccount": 13,
      "code": "I",
      "name": "Inventarios",
      "AccountingAccount": 4
    },
    {
      "idAccountingAccount": 14,
      "code": "PA",
      "name": "Pagos anticipados",
      "AccountingAccount": 4
    },
    {
      "idAccountingAccount": 15,
      "code": "INVERSV",
      "name": "Inversiones y valores",
      "AccountingAccount": 5
    },
    {
      "idAccountingAccount": 16,
      "code": "PPE",
      "name": "Propiedad, planta y equipo",
      "AccountingAccount": 5
    },
    {
      "idAccountingAccount": 17,
      "code": "INT",
      "name": "Intangibles",
      "AccountingAccount": 5
    },
    {
      "idAccountingAccount": 18,
      "code": "PI",
      "name": "Propiedades de inversión",
      "AccountingAccount": 5
    },
    {
      "idAccountingAccount": 19,
      "code": "OA",
      "name": "Otros activos",
      "AccountingAccount": 5
    },
    {
      "idAccountingAccount": 20,
      "code": "CP",
      "name": "Cuentas y documentos por pagar",
      "AccountingAccount": 6
    },
    {
      "idAccountingAccount": 21,
      "code": "PRE",
      "name": "Préstamos",
      "AccountingAccount": 6
    },
    {
      "idAccountingAccount": 22,
      "code": "PROV",
      "name": "Provisiones",
      "AccountingAccount": 6
    },
    {
      "idAccountingAccount": 23,
      "code": "CA",
      "name": "Cobros anticipados",
      "AccountingAccount": 6
    },
    {
      "idAccountingAccount": 24,
      "code": "CPNC",
      "name": "Cuentas y documentos por pagar",
      "AccountingAccount": 7
    },
    {
      "idAccountingAccount": 25,
      "code": "PRENC",
      "name": "Préstamos",
      "AccountingAccount": 7
    },
    {
      "idAccountingAccount": 26,
      "code": "PROVNC",
      "name": "Provisiones",
      "AccountingAccount": 7
    },
    {
      "idAccountingAccount": 27,
      "code": "CANC",
      "name": "Cobros anticipados",
      "AccountingAccount": 7
    },
    {
      "idAccountingAccount": 28,
      "code": "C",
      "name": "Capital",
      "AccountingAccount": 8
    },
    {
      "idAccountingAccount": 29,
      "code": "RA",
      "name": "Resultados acumulados",
      "AccountingAccount": 8
    },
    {
      "idAccountingAccount": 30,
      "code": "CS",
      "name": "Capital Social",
      "AccountingAccount": 9
    },
    {
      "idAccountingAccount": 31,
      "code": "R",
      "name": "Reservas",
      "AccountingAccount": 9
    },
    {
      "idAccountingAccount": 32,
      "code": "RAJ",
      "name": "Resultados acumulados",
      "AccountingAccount": 9
    },
    {
      "idAccountingAccount": 33,
      "code": "CJ",
      "name": "Caja",
      "AccountingAccount": 10
    },
    {
      "idAccountingAccount": 34,
      "code": "CJ2",
      "name": "Caja chica",
      "AccountingAccount": 10
    },
    {
      "idAccountingAccount": 35,
      "code": "BANC",
      "name": "Bancos",
      "AccountingAccount": 10
    },
    {
      "idAccountingAccount": 36,
      "code": "DEP",
      "name": "Depósitos a plazo",
      "AccountingAccount": 10
    },
    {
      "idAccountingAccount": 37,
      "code": "INVERSB",
      "name": "Inversiones en bonos",
      "AccountingAccount": 10
    },
    {
      "idAccountingAccount": 38,
      "code": "INVERSBB",
      "name": "Inversiones en bonos",
      "AccountingAccount": 11
    },
    {
      "idAccountingAccount": 39,
      "code": "DEPB",
      "name": "Depósitos a plazo",
      "AccountingAccount": 11
    },
    {
      "idAccountingAccount": 40,
      "code": "CLI",
      "name": "Clientes (deudores comerciales)",
      "AccountingAccount": 12
    },
    {
      "idAccountingAccount": 41,
      "code": "DEU",
      "name": "Deudores varios",
      "AccountingAccount": 12
    },
    {
      "idAccountingAccount": 42,
      "code": "FE",
      "name": "Funcionarios y empleados",
      "AccountingAccount": 12
    },
    {
      "idAccountingAccount": 43,
      "code": "INTC",
      "name": "Intereses por cobrar",
      "AccountingAccount": 12
    },
    {
      "idAccountingAccount": 44,
      "code": "IMPDC",
      "name": "Impuestos diferidos por cobrar",
      "AccountingAccount": 12
    },
    {
      "idAccountingAccount": 45,
      "code": "RENTC",
      "name": "Rentas por cobrar",
      "AccountingAccount": 12
    },
    {
      "idAccountingAccount": 46,
      "code": "IMPC",
      "name": "Impuestos por cobrar",
      "AccountingAccount": 12
    },
    {
      "idAccountingAccount": 47,
      "code": "DIVC",
      "name": "Dividendos por cobrar",
      "AccountingAccount": 12
    },
    {
      "idAccountingAccount": 48,
      "code": "DOCC",
      "name": "Documentos por cobrar",
      "AccountingAccount": 12
    },
    {
      "idAccountingAccount": 49,
      "code": "INVE",
      "name": "Inventario (Almacén)",
      "AccountingAccount": 13
    },
    {
      "idAccountingAccount": 50,
      "code": "PAPE",
      "name": "Papelería y útiles",
      "AccountingAccount": 14
    },
    {
      "idAccountingAccount": 51,
      "code": "MATEMP",
      "name": "Material de empaque",
      "AccountingAccount": 14
    },
    {
      "idAccountingAccount": 52,
      "code": "MATAS",
      "name": "Material de aseo",
      "AccountingAccount": 14
    },
    {
      "idAccountingAccount": 53,
      "code": "PRIMS",
      "name": "Primas de seguro",
      "AccountingAccount": 14
    },
    {
      "idAccountingAccount": 54,
      "code": "PUBLIC",
      "name": "Propaganda y publicidad",
      "AccountingAccount": 14
    },
    {
      "idAccountingAccount": 55,
      "code": "ANTPROVE",
      "name": "Anticipos a proveedores",
      "AccountingAccount": 14
    },
    {
      "idAccountingAccount": 56,
      "code": "RENTPANT",
      "name": "Rentas pagadas por anticipado",
      "AccountingAccount": 14
    },
    {
      "idAccountingAccount": 57,
      "code": "INTPANT",
      "name": "Intereses pagados por anticipado",
      "AccountingAccount": 14
    },
    {
      "idAccountingAccount": 58,
      "code": "SUSPANT",
      "name": "Suscripciones pagadas por anticipado",
      "AccountingAccount": 14
    },
    {
      "idAccountingAccount": 59,
      "code": "IMPPANT",
      "name": "Impuestos pagados por anticipado",
      "AccountingAccount": 14
    },
    {
      "idAccountingAccount": 60,
      "code": "INVERSBNC",
      "name": "Inversiones en bonos",
      "AccountingAccount": 15
    },
    {
      "idAccountingAccount": 61,
      "code": "INVERSAC",
      "name": "Inversiones en acciones (inversiones en asociadas)",
      "AccountingAccount": 15
    },
    {
      "idAccountingAccount": 62,
      "code": "INVERSNEG",
      "name": "Inversiones en negocios conjuntos",
      "AccountingAccount": 15
    },
    {
      "idAccountingAccount": 63,
      "code": "DEPNC",
      "name": "Depósitos a plazo",
      "AccountingAccount": 15
    },
    {
      "idAccountingAccount": 64,
      "code": "TERR",
      "name": "Terrenos",
      "AccountingAccount": 16
    },
    {
      "idAccountingAccount": 65,
      "code": "EDIF",
      "name": "Edificios",
      "AccountingAccount": 16
    },
    {
      "idAccountingAccount": 66,
      "code": "MAQU",
      "name": "Maquinaria",
      "AccountingAccount": 16
    },
    {
      "idAccountingAccount": 67,
      "code": "MOVEO",
      "name": "Mobiliario y equipo de oficina (muebles y enseres)",
      "AccountingAccount": 16
    },
    {
      "idAccountingAccount": 68,
      "code": "VEH",
      "name": "Vehículos",
      "AccountingAccount": 16
    },
    {
      "idAccountingAccount": 69,
      "code": "ETRANSP",
      "name": "Equipo de transporte",
      "AccountingAccount": 16
    },
    {
      "idAccountingAccount": 70,
      "code": "EREPART",
      "name": "Equipo de reparto",
      "AccountingAccount": 16
    },
    {
      "idAccountingAccount": 71,
      "code": "HERR",
      "name": "Herramientas",
      "AccountingAccount": 16
    },
    {
      "idAccountingAccount": 72,
      "code": "PLUSV",
      "name": "Plusvalía (Crédito mercantíl)",
      "AccountingAccount": 17
    },
    {
      "idAccountingAccount": 73,
      "code": "DERAUT",
      "name": "Derechos de autor",
      "AccountingAccount": 17
    },
    {
      "idAccountingAccount": 74,
      "code": "MARCPATE",
      "name": "Marcas y patentes",
      "AccountingAccount": 17
    },
    {
      "idAccountingAccount": 75,
      "code": "LICE",
      "name": "Licencias",
      "AccountingAccount": 17
    },
    {
      "idAccountingAccount": 76,
      "code": "PROG",
      "name": "Programas informáticos",
      "AccountingAccount": 17
    },
    {
      "idAccountingAccount": 77,
      "code": "TERRINVERS",
      "name": "Terrenos",
      "AccountingAccount": 18
    },
    {
      "idAccountingAccount": 78,
      "code": "EDIFINVERS",
      "name": "Edificios",
      "AccountingAccount": 18
    },
    {
      "idAccountingAccount": 79,
      "code": "DEPOA",
      "name": "Depósitos en garantía",
      "AccountingAccount": 19
    },
    {
      "idAccountingAccount": 80,
      "code": "DOCCOA",
      "name": "Documentos por cobrar (a largo plazo)",
      "AccountingAccount": 19
    },
    {
      "idAccountingAccount": 81,
      "code": "BANCOA",
      "name": "Bancos",
      "AccountingAccount": 19
    },
    {
      "idAccountingAccount": 82,
      "code": "PROVE",
      "name": "Proveedores (acreedores comerciales)",
      "AccountingAccount": 20
    },
    {
      "idAccountingAccount": 83,
      "code": "SSPP",
      "name": "Sueldos y salarios por pagar",
      "AccountingAccount": 20
    },
    {
      "idAccountingAccount": 84,
      "code": "IMPP",
      "name": "Impuestos por pagar",
      "AccountingAccount": 20
    },
    {
      "idAccountingAccount": 85,
      "code": "INTP",
      "name": "Intereses por pagar",
      "AccountingAccount": 20
    },
    {
      "idAccountingAccount": 86,
      "code": "ACREE",
      "name": "Acreedores varios",
      "AccountingAccount": 20
    },
    {
      "idAccountingAccount": 87,
      "code": "DOCP",
      "name": "Documentos por pagar",
      "AccountingAccount": 20
    },
    {
      "idAccountingAccount": 88,
      "code": "DIVP",
      "name": "Dividendos por pagar",
      "AccountingAccount": 20
    },
    {
      "idAccountingAccount": 89,
      "code": "PREBANC",
      "name": "Préstamos bancarios",
      "AccountingAccount": 21
    },
    {
      "idAccountingAccount": 90,
      "code": "PREHIP",
      "name": "Préstamos hipotecarios",
      "AccountingAccount": 21
    },
    {
      "idAccountingAccount": 91,
      "code": "PROVCE",
      "name": "Provisiones para compensaciones a empleados",
      "AccountingAccount": 22
    },
    {
      "idAccountingAccount": 92,
      "code": "PROVGC",
      "name": "Provisiones para cubrir garantías a clientes",
      "AccountingAccount": 22
    },
    {
      "idAccountingAccount": 93,
      "code": "PROVRL",
      "name": "Provisiones para cubrir reclamos legales",
      "AccountingAccount": 22
    },
    {
      "idAccountingAccount": 94,
      "code": "RENTANT",
      "name": "Rentas cobradas por anticipado",
      "AccountingAccount": 23
    },
    {
      "idAccountingAccount": 95,
      "code": "INTANT",
      "name": "Intereses cobrados por anticipado",
      "AccountingAccount": 23
    },
    {
      "idAccountingAccount": 96,
      "code": "SERVANT",
      "name": "Servivios cobrados por anticipado",
      "AccountingAccount": 23
    },
    {
      "idAccountingAccount": 97,
      "code": "SUSCANT",
      "name": "Suscripciones cobradas por anticipado",
      "AccountingAccount": 23
    },
    {
      "idAccountingAccount": 98,
      "code": "ANTC",
      "name": "Anticipos de clientes",
      "AccountingAccount": 23
    },
    {
      "idAccountingAccount": 99,
      "code": "ACREEV",
      "name": "Acreedores varios",
      "AccountingAccount": 24
    },
    {
      "idAccountingAccount": 100,
      "code": "DOCPLP",
      "name": "Documentos por pagar",
      "AccountingAccount": 24
    },
    {
      "idAccountingAccount": 101,
      "code": "PREBANCLP",
      "name": "Préstamos bancarios",
      "AccountingAccount": 25
    },
    {
      "idAccountingAccount": 102,
      "code": "PREHIPLP",
      "name": "Préstamos hipotecarios",
      "AccountingAccount": 25
    },
    {
      "idAccountingAccount": 103,
      "code": "BANCOA",
      "name": "Provisiones para compensaciones de empleados",
      "AccountingAccount": 26
    },
    {
      "idAccountingAccount": 104,
      "code": "BANCOA",
      "name": "Provisiones para cubrir garantías a clientes",
      "AccountingAccount": 26
    },
    {
      "idAccountingAccount": 105,
      "code": "BANCOA",
      "name": "Provisiones para cubrir reclamos legales",
      "AccountingAccount": 26
    },
    {
      "idAccountingAccount": 106,
      "code": "BANCOA",
      "name": "Rentas cobradas por anticipado",
      "AccountingAccount": 27
    },
    {
      "idAccountingAccount": 107,
      "code": "BANCOA",
      "name": "Intereses cobrados por anticipado",
      "AccountingAccount": 27
    },
    {
      "idAccountingAccount": 108,
      "code": "BANCOA",
      "name": "Servicios cobrados por anticipado",
      "AccountingAccount": 27
    },
    {
      "idAccountingAccount": 109,
      "code": "CAP",
      "name": "Capital",
      "AccountingAccount": 28
    },
    {
      "idAccountingAccount": 110,
      "code": "PERDACUM",
      "name": "Pérdidas de años anteriores",
      "AccountingAccount": 29
    },
    {
      "idAccountingAccount": 111,
      "code": "UTILACUM",
      "name": "Utilidades de años anteriores",
      "AccountingAccount": 29
    },
    {
      "idAccountingAccount": 112,
      "code": "PERDNET",
      "name": "Pérdida neta del periodo",
      "AccountingAccount": 29
    },
    {
      "idAccountingAccount": 113,
      "code": "UTILINET",
      "name": "Utilidad neta del periodo",
      "AccountingAccount": 29
    },
    {
      "idAccountingAccount": 114,
      "code": "CAPS",
      "name": "Capital Social",
      "AccountingAccount": 30
    },
    {
      "idAccountingAccount": 115,
      "code": "RESL",
      "name": "Reserva legal",
      "AccountingAccount": 31
    },
    {
      "idAccountingAccount": 116,
      "code": "RESEST",
      "name": "Reservas estartuarias",
      "AccountingAccount": 31
    },
    {
      "idAccountingAccount": 117,
      "code": "RESVOL",
      "name": "Reservas voluntarias",
      "AccountingAccount": 31
    },
    {
      "idAccountingAccount": 118,
      "code": "RESACUM",
      "name": "Resultados acumulados",
      "AccountingAccount": 32
    },
    {
      "idAccountingAccount": 119,
      "code": "PERDACUMJ",
      "name": "Perdidas acumulados",
      "AccountingAccount": 32
    },
    {
      "idAccountingAccount": 120,
      "code": "PERDNETJ",
      "name": "Pérdida neta del periodo",
      "AccountingAccount": 32
    },
    {
      "idAccountingAccount": 121,
      "code": "UTILNETJ",
      "name": "Utilidad neta del periodo",
      "AccountingAccount": 32
    },
    {
      "idAccountingAccount": 123,
      "code": "VENT",
      "name": "Ventas",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 124,
      "code": "RDSV",
      "name": "Rebajas y descuentos sobre ventas",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 125,
      "code": "DSV",
      "name": "Devoluciones sobre ventas",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 126,
      "code": "COMP",
      "name": "Compras",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 127,
      "code": "RDSC",
      "name": "Rebajas y descuentos sobre compras",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 128,
      "code": "DSC",
      "name": "Devoluciones sobre compras",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 129,
      "code": "GSC",
      "name": "Gastos sobre compras",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 130,
      "code": "GA",
      "name": "Gastos de administración",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 131,
      "code": "GV",
      "name": "Gastos de venta",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 132,
      "code": "GF",
      "name": "Gastos de financieros",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 133,
      "code": "OG",
      "name": "Otros gastos",
      "AccountingAccount": 122
    },
    {
      "idAccountingAccount": 134,
      "code": "OI",
      "name": "Otros ingresos",
      "AccountingAccount": 122
    }
  ]

  constructor() { }

  getFirstOrderAccounts(): IAccount[] {
    return this.accounts.filter(e => e.AccountingAccount === 0);
  }

  getSecondOrderAccounts(): IAccount[] {
    return this.accounts.filter(e => e.AccountingAccount === 1 || e.AccountingAccount === 2 || e.AccountingAccount === 3);
  }

  getExtraOrdersAccounts(array1: IAccount[]): IAccount[] {
    return this.filterArray(array1, this.accounts);
  }

  getIncomeStatementAccounts(): IAccount[]{
    return this.accounts.filter(e => e.AccountingAccount === 122);
  }

  private filterArray(array1: IAccount[], array2: IAccount[]): IAccount[] {
    return array2.filter(function (element) {
      return array1.some(function (elem) {
        return elem.idAccountingAccount === element.AccountingAccount;
      });
    });
  }


}
