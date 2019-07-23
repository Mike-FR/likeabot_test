<template>
  <div>
    <h3>Users list</h3>
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
        </tr>
      </tbody>
    </table>
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
  methods: {},
  created() {
    datasRef.once("value").then(snapshot => {
      this.items = Object.values(snapshot.val());
    });
    console.log(this.items);
  }
};
</script>