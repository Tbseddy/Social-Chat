import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the social chat layout', () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('Chats')
    expect(wrapper.text()).toContain('Edward Lietz')
    expect(wrapper.text()).toContain('Send')
  })
})
