<template>
  <div id="inscription">
    <div class="containerInscription">
      <v-container grid-list-md>
        <v-layout row wrap>

          <v-flex md3></v-flex>

          <v-flex md6>
            <h2>Enregister vous!</h2>
            <v-subheader>Subheader</v-subheader>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                v-model="lastName"
                :rules="lastNameRules"
                label="LastName"
                required
              ></v-text-field>
              <v-text-field
                v-model="firstName"
                :rules="firstNameRules"
                label="FirstName"
                required
              ></v-text-field>
              <v-text-field
                v-model="pseudo"
                :rules="pseudoRules"
                label="Pseudo"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :rules="passwordRules"
                :type="show1 ? 'text' : 'password'"
                name="input-10-2"
                label="Password"
                class="input-group--focused"
                @click:append="show1 = !show1"
                required
              ></v-text-field>
              <v-text-field
                v-model="passwordConfirm"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :rules="passwordRules"
                :error-messages='passwordMatchError()'
                :type="show1 ? 'text' : 'password'"
                name="input-10-2"
                label="Password Confirmation"
                class="input-group--focused"
                @click:append="show1 = !show1"
                required
              ></v-text-field>
              <v-checkbox
                v-model="checkbox"
                label="Did you agree?"
                required
              ></v-checkbox>
              <v-btn :disabled="!valid" @click="submit">Submit</v-btn>
              <v-btn @click="clear">Clear</v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inscription',
  data: () => ({
    valid: false,
    lastName: '',
    firstName: '',
    email: '',
    pseudo: '',
    show1: false,
    password: '',
    passwordConfirm: '',
    checkbox: false,
    lastNameRules: [
      v => !!v || 'LastName is required',
      v => v.length <= 12 || 'LastName must be less than 12 characters'
    ],
    firstNameRules: [
      v => !!v || 'FirstName is required',
      v => v.length <= 12 || 'FirstName must be less than 12 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    pseudoRules: [
      v => !!v || 'Pseudo is required',
      v => v.length <= 10 || 'Pseudo must be less than 12 characters'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 8 || 'Password must have min 8 characters'
    ]
  }),
  methods: {
    submit () {
      console.log('test')
    },
    clear () {
      this.$refs.form.reset()
    },
    passwordMatchError () {
      return (this.password === this.passwordConfirm) ? '' : 'Password must match'
    }
  }
}
</script>

<style scoped></style>
