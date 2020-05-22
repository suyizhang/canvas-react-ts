import { configure } from 'mobx';
import home from './home';

configure({ enforceActions: 'observed' });

const SuyiStore = {
  home,
};

export default SuyiStore;
