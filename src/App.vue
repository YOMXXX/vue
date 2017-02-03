<template>
  <div class="wrap">
    <div class="header">
      <v-header />
  </div>
</template>

<script>
require('../fonts/style.css')
require('./css/reset.css')

import Header from 'components/Header/header'

export default {
  name: 'app',
  components: {
    'v-header': Header
  },
  data () {
    return {
      'detailShow': false
    }
  },
  watch: {},
  computed: {},
  mounted: function () {
    this.msgg = {
      'login': 'twbs',
      'id': '918581',
      'avatar_url': 'https://avatars.githubusercontent.com/u/2918581?v=3',
      'gravatar_id': '',
      'url': 'https://api.github.com/users/twbs',
      'html_url': 'https://github.com/twbs',
      'followers_url': 'https://api.github.com/users/twbs/followers',
      'following_url': 'https://api.github.com/users/twbs/following{/other_user}',
      'gists_url': 'https://api.github.com/users/twbs/gists{/gist_id}',
      'starred_url': 'https://api.github.com/users/twbs/starred{/owner}{/repo}',
      'subscriptions_url': 'https://api.github.com/users/twbs/subscriptions',
      'organizations_url': 'https://api.github.com/users/twbs/orgs',
      'repos_url': 'https://api.github.com/users/twbs/repos',
      'events_url': 'https://api.github.com/users/twbs/events{/privacy}',
      'received_events_url': 'https://api.github.com/users/twbs/received_events',
      'type': 'Organization',
      'site_admin': false
    }
  },
  methods: {
    enterDetails: function () {
        this.detailShow = !this.detailShow
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
