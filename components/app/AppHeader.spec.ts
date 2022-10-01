import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from 'vitest';

import AppHeader from "./AppHeader.vue";

describe('AppHeader.vue', async () => {
  await setup({});

  it('Contains a title', () => {
    const wrapper = mount(AppHeader);

    expect(wrapper.find('h2').exists()).toBe(true);
  });
});
