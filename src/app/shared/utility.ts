import moment from "moment";

export class Utility {

  static getDate(fecha: string): Date {
    return moment(fecha, 'DD/MM/YYYY').toDate();
  }

  static formatearFecha(fecha: Date, hora: boolean = false): string {
    if (hora) {
      return moment(fecha).format('DD/MM/YYYY hh:mm:ss');
    }
    return moment(fecha).format('DD/MM/YYYY');
  }


}
