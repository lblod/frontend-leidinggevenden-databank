import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DownloadMiniatures extends Component {
  @service store;
  @service fastboot

  constructor() {
    super(...arguments);
    this.classNames = ['grid'];
    const promises = Promise.all([
      this.fetchMetadata('text/turtle', 'ttlFile'),
      this.fetchMetadata('text/csv', 'csvFile')
    ]);
    if (this.fastboot.isFastBoot)
      this.fastboot.deferRendering(promises);
  }

  async fetchMetadata(mimeType, field) {
    try {
      const files = await this.store.query('export', {
        sort: '-created',
        filter: { format: mimeType },
        page: { size: 1 }
      });
      this.set(field, files.firstObject);
    }
    catch(e) {
      // not handling it at the moment
    }
  }

  get ttlMetadata() {
    return `Turtle - ${this.ttlFile.filesizeMb}MB - ${this.ttlFile.createdFormatted}`;
  }

  get csvMetadata() {
    return `CSV - ${this.csvFile.filesizeMb}MB - ${this.csvFile.createdFormatted}`;
  }

  @action
  download(file) {
    if (file)
      window.location = `/files/${file.get('filename')}`;
  }

}
