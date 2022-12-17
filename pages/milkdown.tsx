import { Editor, rootCtx } from "@milkdown/core";
import { ReactEditor, useEditor } from "@milkdown/react";
import { nord } from "@milkdown/theme-nord";
import { gfm } from '@milkdown/preset-gfm'
import { clipboard } from '@milkdown/plugin-clipboard'
import { cursor } from '@milkdown/plugin-cursor'
import { emoji } from '@milkdown/plugin-emoji'
import { history } from '@milkdown/plugin-history'
import { slash } from '@milkdown/plugin-slash'
import { tooltip } from '@milkdown/plugin-tooltip'
import { prism } from '@milkdown/plugin-prism'
import { indent, indentPlugin } from '@milkdown/plugin-indent'
import '../node_modules/prism-themes/themes/prism-gruvbox-dark.css'
import '../node_modules/material-icons/iconfont/material-icons.css'

export default function Milkdown() {
    const { editor } = useEditor(
        (root) =>
          Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, root)
            })
            .use(nord)
            .use(gfm)
            .use(prism)
            .use(clipboard)
            .use(indent.configure(indentPlugin, {
              type: 'space',
              size: 4,
            }))
            .use(cursor)
            .use(emoji)
            .use(history)
            .use(slash)
            .use(tooltip),
            []
      )
  return <ReactEditor editor={editor} />;
}