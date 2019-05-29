import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({


   /*********************************************************************************
    * Temporary workaround fastboot and ember-data-table/addon/mixins/serializer.js
    * We keep these here, as we want to experiment on how to tackle fastboot issues.
    * Effective code changes will be preceded by //--- FASTBOOT WORKAROUND ---//
    *********************************************************************************/

  /**
      Parse the links in the JSONAPI response and convert to a meta-object
  */
  normalizeQueryResponse(store, clazz, payload) {
    const result = this._super(...arguments);
    result.meta = result.meta || {};

    if (payload.links) {
      result.meta.pagination = this.createPageMeta(payload.links);
    }
    if (payload.meta) {
      result.meta.count = payload.meta.count;
    }

    return result;
  },

  /**
     Transforms link URLs to objects containing metadata
     E.g.
     {
         previous: '/streets?page[number]=1&page[size]=10&sort=name
         next: '/streets?page[number]=3&page[size]=10&sort=name
     }

     will be converted to

     {
         previous: { number: 1, size: 10 },
         next: { number: 3, size: 10 }
     }
   */
  createPageMeta(data) {
    let meta = {};

    Object.keys(data).forEach(type => {
      const link = data[type];
      meta[type] = {};


      //--- FASTBOOT WORKAROUND ---//
      //extracts from '/path?foo=bar?baz=foo' to foo=bar?baz=foo
      //I hope this covers all previously supported cases
      const [ path, query ] = link.split(/\?(.+)/);
      if(!query) return meta;

      // let a = document.createElement('a');
      // a.href = link;
      // let query = a.search.slice(1);

      query.split('&').forEach(pairs => {
        const [param, value] = pairs.split('=');

        if (decodeURIComponent(param) === 'page[number]') {
          meta[type].number = parseInt(value);
        } else if (decodeURIComponent(param) === 'page[size]') {
          meta[type].size = parseInt(value);
        }

      });

    });

    return meta;
  }

  /*********************************************************************************
   * end workaround
   *********************************************************************************/
});
