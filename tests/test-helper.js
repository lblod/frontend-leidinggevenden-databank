import Application from 'frontend-leidinggevenden-databank/app';
import config from 'frontend-leidinggevenden-databank/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
