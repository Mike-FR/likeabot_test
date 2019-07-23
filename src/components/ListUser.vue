<template>
  <div>
    <h3>Users list</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of items" :key="item['.key']">
          <td>{{ item.firstname }}</td>
          <td>{{ item.lastname }}</td>
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
  created: () => {
      console.log(this.items)
  }
};
</script>