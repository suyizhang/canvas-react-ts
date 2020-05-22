import { observable } from 'mobx';

class home {
  @observable user = {
    name: 'suyi',
  };
}

export default new home();
