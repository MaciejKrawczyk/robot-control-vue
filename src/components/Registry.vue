<template>
  <div class="flex items-center flex-col">

    <h1 class="text-3xl font-bold my-10">Registry</h1>

    <div class="w-full">

      <v-table>
        <thead>
        <tr>
          <th class="text-left">
            Registry ID
          </th>
          <th class="text-left">
            Details
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="register in registry"
            :key="register.id"
        >
          <td>{{ register.id }}</td>
          <td class="flex justify-between items-center">
            {{ register.Position.x }}, {{ register.Position.y }}, {{ register.Position.z }}, {{ register.Position.alfa }}, {{ register.Position.beta }}, {{ register.Position.gamma }}

            <v-btn size="small">
              X
            </v-btn>
          </td>
        </tr>
        </tbody>
      </v-table>

    </div>

  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      registry: [],
    }
  },
  mounted() {
    fetch('http://localhost:5000/api/registry')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.registry = data;
        })
        .catch(error => console.error('Error:', error));
  },
}
</script>

