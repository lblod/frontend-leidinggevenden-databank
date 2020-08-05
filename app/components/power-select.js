import EmberPowerSelect from 'ember-power-select/components/power-select';

export class PowerSelect extends EmberPowerSelect {
  constructor() {
    super(...arguments);
    this.loadingMessage = 'Aan het laden...';
    this.noMatchesMessage = 'Geen resultaten';
    this.searchMessage = 'Typ om te zoeken';
  }
}

export default PowerSelect;
