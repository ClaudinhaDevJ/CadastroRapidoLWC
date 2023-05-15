import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class TCClwc extends LightningElement {
   
//Sua função é mostrar mensagem para a interface do usuário.
    handleSuccess(event) {
        this.showToast();
    }

showToast() {
    const event = new ShowToastEvent({
        title: 'Registro Realizado com Sucesso',
        message: 'Obrigado!',
    });
    this.dispatchEvent(event);
};
}
