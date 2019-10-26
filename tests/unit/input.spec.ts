import { mount } from '@vue/test-utils';
import VueDadata from '@/components/VueDadata.vue';

describe('VueDadata.vue', () => {
  it('Testing working token and query', async () => {
    const wrapper = mount(VueDadata, {
        propsData: {
            token: process.env.VUE_APP_DADATA_API_KEY
        }
    });

    wrapper.find('input').setValue('Москва')
    wrapper.setData({inputFocused: true, suggestionsVisible: true})
    await new Promise((r) => setTimeout(r, 2000));
    expect(wrapper.find('.vue-dadata__suggestions-item').exists()).toBe(true)
    expect(wrapper.element).toMatchSnapshot()
  });
});