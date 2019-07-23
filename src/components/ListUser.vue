<template>
  <div id="listuser">
    <v-app>
      <h3>Users list</h3>
      <div>
        <img src="../assets/logo.png" />
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Birthday</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of items" :key="item['.key']">
            <td>{{ item.firstname }}</td>
            <td>{{ item.lastname }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.birthday }}</td>
            <td>
              <router-link
                :to="{ name: 'Edit', params: {id: item['.key']} }"
                class="btn btn-warning"
              >Edit</router-link>
            </td>
            <td>
              <button @click="deleteItem(item['.key'])" class="btn btn-danger">Delete</button>
            </td>   
          </tr>
        </tbody>
      </table>
    </v-app>
  </div>
</template>

<script>
import { datasRef } from "../firebase";

export default {
  components: {
    name: "ListUser"
  },
  data() {
    return {
      items: []
    };
  },
  firebase: {
    items: datasRef
  },
  methods: {
      deleteItem(key) {
      datasRef.items.child(key).remove();
    }
  },
  created() {
    datasRef.once("value").then(snapshot => {
      this.items = Object.values(snapshot.val());
    });
    console.log(this.items);
  }
};
</script>

<style>
#listuser {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

table {
  margin-top: 2em;
}

img {
  width: 60px;
  margin: 3em 0;
}
</style>
