import { fileURLToPath } from "node:url";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import AppFooter from "./AppFooter.vue";

describe("AppFooter.vue", async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../../', import.meta.url)),
    server: true,
    browser: true,
    configFile: 'nuxt.config.ts',
  });

  it("Contains a title", () => {
    const wrapper = mount(AppFooter);

    expect(wrapper.find("h2").exists()).toBe(true);
  });
});
