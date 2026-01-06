import DS from 'ember-data';
const maxRetries = 5;

// TODO: configure the adapter once we converted it to a native class: https://github.com/redpencilio/fastboot-app-server-service?tab=readme-ov-file#configure-the-ember-data-adapter-to-send-requests-to-the-backend
export default DS.JSONAPIAdapter.extend({
  init() {
    this._super(...arguments);
  },

  ajax(_url, method) {
    if (method === 'POST') return this._super(...arguments);

    const origAjax = this._super;
    const args = arguments;
    const sleep = (time) =>
      new Promise((resolve /*,reject*/) =>
        setTimeout(() => resolve(true), time)
      );
    const retry = (livesSpent) => {
      return new Promise(async (resolve, reject) => {
        await sleep(250 * livesSpent);
        if (livesSpent < maxRetries)
          origAjax.apply(this, args).then(
            (res) => resolve(res),
            () =>
              retry(livesSpent + 1).then(
                (r) => resolve(r),
                (r) => reject(r)
              )
          );
        else
          origAjax.apply(this, args).then(
            (res) => resolve(res),
            (e) => reject(e)
          );
      });
    };
    return retry(0);
  },
});
