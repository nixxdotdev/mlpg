import { Mark, mergeAttributes } from '@tiptap/core'

export const FontFamily = Mark.create({
  name: 'fontFamily',

  addOptions() {
    return {
      types: ['textStyle'],
      defaultFamily: null,
    }
  },

  addAttributes() {
    return {
      family: {
        default: this.options.defaultFamily,
        parseHTML: element => element.style.fontFamily?.replace(/['"]/g, ''),
        renderHTML: attributes => {
          if (!attributes.family) {
            return {}
          }
          return {
            style: `font-family: ${attributes.family}`,
          }
        },
      },
    }
  },

  parseHTML() {
    return [{ style: 'font-family' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes), 0]
  },

  addCommands() {
    return {
      setFontFamily:
        family =>
        ({ chain }) => {
          return chain()
            .setMark(this.name, { family })
            .run()
        },
      unsetFontFamily:
        () =>
        ({ chain }) => {
          return chain()
            .unsetMark(this.name)
            .run()
        },
    }
  },
})
