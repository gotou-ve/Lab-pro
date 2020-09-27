<template>
  <div>
    <v-app-bar dark color="#A3E0A6" app clipped-right>
      <v-toolbar-title>LaBプロ</v-toolbar-title>
      <v-spacer />
      <v-icon>mdi-account-circle</v-icon>
      <v-app-bar-nav-icon />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped right>
      <v-list-item two-line>
        <v-icon>mdi-account-circle</v-icon>
      </v-list-item>
      <v-list-item-content>
        <v-list-item-title>Application</v-list-item-title>
        <v-list-item-subtitle>Subtext</v-list-item-subtitle>
      </v-list-item-content>
      <v-divider />
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'ホーム', icon: 'mdi-home' },
        { title: 'かりる', icon: 'mdi-gesture-double-tap' },
        { title: 'かりたい通知', icon: 'mdi-exclamation-thick' },
        { title: 'とうろく', icon: 'mdi-plus-box' }
      ]
    }
  }
}
</script>
