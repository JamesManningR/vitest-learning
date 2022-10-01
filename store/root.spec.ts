import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest';

import { useRootStore } from "./root";

describe('Pinia Root Store Test: ', () => { 
  let store: ReturnType<typeof useRootStore>;

  beforeEach(() => {
    // Create a fresh store before each test
    setActivePinia(createPinia());

    store = useRootStore();
  });

  // Initialize the store
  it('Initialises the store with default values', () => {
    expect(store.userLang).toBe('en');
  });
})