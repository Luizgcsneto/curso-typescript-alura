import { NegociacoesController } from './controllers/negociacoes-controller';

const controller = new NegociacoesController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});