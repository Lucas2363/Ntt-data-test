import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from '../../app.vue';

describe('app.vue', () => {
  it('renders the correct text', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('SANTANDER');
  });
});
