export enum Situacao{
    CURSANDO    = 'Cursando',
    APROVADO    = 'Aprovado(a)',
    REPROVADO   = 'Reprovado(a)',
    TRANCADO    = 'Matrícula trancada',
    AVFINAL     = 'Avaliação final',
    TRANSFERIDO = 'Transferido(a)'
} 

export class Boletim { 
    private __bim1: number | undefined;
    private __bim2: number| undefined;
    private __bim3: number| undefined;
    private __bim4: number| undefined;
    private media_parcial: number| undefined;
    private mp: number | undefined; 
    private md: number | undefined; 
    private naf: number | undefined; 
    private situacao: Situacao; 

    constructor(b1: number | undefined, b2: number | undefined, b3: number | undefined, b4: number | undefined) {
        this.__bim1 = b1; 
        this.__bim2 = b2; 
        this.__bim3 = b3; 
        this.__bim4 = b4; 
        this.situacao = Situacao.CURSANDO; 
        this.media_parcial = undefined; 
    }

    set bim1(nota:number | undefined){
        if (nota){
            if (nota>=0 && nota<=100){
                this.__bim1= nota
            }
        }
    }
    get bim1(): number | undefined{
        return this.__bim1; 

    }
    /* bim2 */ 
    set bim2(nota:number | undefined){
        if (nota){
            if (nota>=0 && nota<=100){
                this.__bim2= nota
            }
        }
    }
    get bim2(): number | undefined{
        return this.__bim2; 

    }

    /* bim3 */ 
    set bim3(nota:number | undefined){
        if (nota){
            if (nota>=0 && nota<=100){
                this.bim3= nota
            }
        }
    }
    get bim3(): number | undefined{
        return this.__bim3; 

    }

    /* bim4 */ 
    set bim4(nota:number | undefined){
        if (nota){
            if (nota>=0 && nota<=100){
                this.__bim4= nota
            }
        }
    }
    get bim4(): number | undefined{
        return this.__bim4; 

    }

    obter_bim1(){
        return this.__bim1; 
    }
    obter_bim2(){
        return this.__bim2; 
    }
    obter_bim3(){
        return this.__bim3; 
    }
    obter_bim4(){
        return this.__bim4; 
    }

    calcular_media_parcial(){
        let mp : number| undefined = undefined; 
        if (this.bim1 && this.bim2 && this.bim3 && this.bim4){
            mp = (this.bim1*2 + this.bim2*2 + this.bim3*3 + this.bim4*3)/10; 
        }
        if (mp && mp>=60){
             this.alterar_situacao(Situacao.APROVADO)
        }else if (mp && mp>=10){
            this.alterar_situacao(Situacao.AVFINAL)
        }else{
            this.alterar_situacao(Situacao.REPROVADO)

        }
        return mp; 
    } 

    private alterar_situacao(s: Situacao){
        this.situacao = s; 
    }
    obter_media_parcial(){
        return this.mp; 
    }

    obter_media_final(){
        return this.naf; 
    }

}

