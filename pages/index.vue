<template>
  <v-container>
    <v-card width="500">
      <v-card-title>ログイン</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>メールアドレス</v-col>
          <v-col>
            <v-text-field v-model="mailAddress" placeholder="ex)abs@gmail.com" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>パスワード</v-col>
          <v-col><v-text-field v-model="password" /></v-col>
        </v-row>
        <v-row>
          <v-btn @click="submit">
            登録
          </v-btn>
          <v-btn @click="login">
            ログイン
          </v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  data: () => ({
    mailAddress: '',
    message: '',
    password: '',
    show1: false
  }),
  methods: {
    login () {
      const provider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken
        // The signed-in user info.
        const user = result.user
        // ...
        alert(token)
        alert(user)
      }).catch(function (error) {
        alert(error)
      })
    },
    login2 () {
      this.mailAddress = 'abs'
      alert(this.mailAddress)
    },
    submit () {
      const Ref = firebase.database().ref()
      Ref.push({ addresss: this.mailAddress, message: this.message })
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>
