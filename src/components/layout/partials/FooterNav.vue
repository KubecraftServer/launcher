<template>
    <nav class="footer-nav">
        <ul class="list-reset">
            <li>
                <a @click="open('mailto:0x77dev@protonmail.com?subject=Kubecraft%20Launcher%20Support')">Support</a>
            </li>
            <li>
                <a @click="open('https://github.com/kubecraftserver/launcher')">GitHub</a>
            </li>
        </ul>
    </nav>
</template>

<script>
const { shell } = require('electron')

export default {
  name: 'CFooterNav',
  methods: {
      open(url){
        return shell.openExternalSync(url);
      }
  }
}
</script>
