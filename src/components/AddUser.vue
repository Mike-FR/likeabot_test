<template>
  <div id="adduser">
    <v-app>
      <h3>Create a new user</h3>
      <div>
        <img src="../assets/logo.png" />
      </div>

      <v-form v-model="valid">
        <v-container>
          <v-layout>
            <v-flex xs12>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="20"
                label="First name"
                required
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="20"
                label="Last name"
                required
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Birthday date"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                ></v-date-picker>
              </v-menu>
            </v-flex>
            <div>
              <v-btn color="success" @click="save(date)">Create</v-btn>
            </div>
          </v-layout>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import { datasRef } from "../firebase";

export default {
  components: {
    name: "AddUser"
  },

  data: () => ({
    date: null,
    menu: false,
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 20 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      datasRef.push({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        birthday: date
      });
      this.$router.push('/index')
    }
  }
};
</script>

<style>
#adduser {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h3 {
    margin-top: 2em;
}

img {
  width: 60px;
  margin: 3em 0;
}

.layout {
  display: flex;
  flex-direction: column;
  border: 1px solid #41b883;
  box-shadow: 6px 6px 0px #41b883;
  padding: 3em;
}
</style>