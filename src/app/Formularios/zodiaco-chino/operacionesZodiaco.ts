export class OperacionesZodiaco {
    nombre!: string;
    apellidoPaterno!: string;
    apellidoMaterno!: string;
    dia!: number;
    mes!: number;
    año!: number;
    sexo!: string;
    edad!: number;
    signo!: string;
    imagen!: string;

    calcular(): void {
        const hoy = new Date();
        this.edad = hoy.getFullYear() - this.año;
        let mesActual = hoy.getMonth() + 1;
        let diaActual = hoy.getDate();
        if (this.mes > mesActual || (this.mes === mesActual && this.dia > diaActual)) {
            this.edad--;
        }

        let resto = (this.año - 2020) % 12;
        let indice = (resto + 12) % 12;
        switch (indice) {
            case 0: 
                this.signo = 'Rata'; 
                break;
            case 1: 
                this.signo = 'Buey'; 
                break;
            case 2:
                this.signo = 'Tigre';
                break;
            case 3:
                this.signo = 'Conejo';
                break;
            case 4:
                this.signo = 'Dragón';
                break;
            case 5:
                this.signo = 'Serpiente';
                break;
            case 6:
                this.signo = 'Caballo'; 
                break;
            case 7:
                this.signo = 'Cabra';
                break;
            case 8:
                this.signo = 'Mono';
                break;
            case 9:
                this.signo = 'Gallo';
                break;
            case 10:
                this.signo = 'Perro';
                break;
            case 11:
                this.signo = 'Cerdo';
                break;
            default:
                this.signo = 'Año no válido';
            }
        this.imagen = `assets/img/${indice}.jpg`;
    }
}
