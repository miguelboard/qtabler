import { boot } from 'quasar/wrappers';
import TLogo from 'src/core/components/quasar-extends/t-logo.vue';
import TInput from 'src/core/components/quasar-extends/t-input.vue';
import TIcon from 'src/core/components/quasar-extends/t-icon.vue';
import TWindow from 'src/core/components/quasar-extends/t-window.vue';

export default boot(({ app }) => {
  app.component('t-logo', TLogo);
  app.component('t-input', TInput);
  app.component('t-icon', TIcon);
  app.component('t-window', TWindow);
});
