import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DownloadMiniatures extends Component {
  @service store;
  @service fastboot;
  @tracked ttlFile = undefined;
  @tracked csvFile = undefined;

  constructor() {
    super(...arguments);
    const promises = Promise.all([
      this.fetchMetadata('text/turtle', 'ttlFile'),
      this.fetchMetadata('text/csv', 'csvFile'),
    ]);
    if (this.fastboot.isFastBoot) this.fastboot.deferRendering(promises);
  }

  async fetchMetadata(mimeType, field) {
    try {
      const files = await this.store.query('export', {
        sort: '-created',
        filter: { format: mimeType },
        page: { size: 1 },
      });
      this[field] = files.firstObject;
    } catch (e) {
      // not handling it at the moment
    }
  }

  get ttlMetadata() {
    return `Turtle - ${this.ttlFile.filesizeMb}MB - ${formatDate(
      this.ttlFile.created
    )}`;
  }

  get csvMetadata() {
    return `CSV - ${this.csvFile.filesizeMb}MB - ${formatDate(
      this.csvFile.created
    )}`;
  }

  @action
  download(file) {
    if (file) window.location = `/files/${file.filename}`;
  }
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
