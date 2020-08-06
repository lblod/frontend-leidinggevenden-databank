import EmberPowerSelect from 'ember-power-select/components/power-select';

export class PowerSelect extends EmberPowerSelect {
  constructor() {
    super(...arguments);
    this.loadingMessage = 'Aan het laden...';
  }
}

export default PowerSelect;
