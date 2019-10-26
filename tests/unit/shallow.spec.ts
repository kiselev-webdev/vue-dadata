import { shallowMount } from '@vue/test-utils';
import VueDadata from '@/components/VueDadata.vue';

describe('VueDadata.vue', () => {
  it('Rander Dadata component', () => {
    const wrapper = shallowMount(VueDadata, {
      propsData: {
                token: process.env.VUE_APP_DADATA_API_KEY
            }
    });
    expect(wrapper.element).toMatchSnapshot()
  });
});
