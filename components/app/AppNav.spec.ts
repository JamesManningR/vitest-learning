import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from 'vitest';

import AppNav from "./AppNav.vue";
await setup({});

describe('AppHeader.vue', async () => {

  it('Contains a nav with navigation links', () => {
    const wrapper = mount(AppNav);

    const nav = wrapper.find('nav');
  });

  it('Contains a link to the home page', () => {
    const wrapper = mount(AppNav);

    const homeLink = wrapper.find('a[href="/"]');

    expect(homeLink.exists()).toBe(true);
  });
});
