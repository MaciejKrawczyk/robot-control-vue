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
            {{ register.data }}

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
      registry: [
        {
          id: 1,
          data: {
            x: 1,
            y: 2,
            z: 3,
            alfa: 120,
            beta: 50,
            gamma: 30,
          }
        },
        {
          id: 2,
          data: {
            x: 1,
            y: 2,
            z: 3,
            alfa: 120,
            beta: 50,
            gamma: 30,
          }
        },
        {
          id: 3,
          data: {
            x: 1,
            y: 2,
            z: 3,
            alfa: 120,
            beta: 50,
            gamma: 30,
          }
        },
        {
          id: 4,
          data: {
            x: 1,
            y: 2,
            z: 3,
            alfa: 120,
            beta: 50,
            gamma: 30,
          }
        },
        {
          id: 5,
          data: {
            x: 1,
            y: 2,
            z: 3,
            alfa: 120,
            beta: 50,
            gamma: 30,
          }
        },
        {
          id: 6,
          data: {
            x: 1,
            y: 2,
            z: 3,
            alfa: 120,
            beta: 50,
            gamma: 30,
          }
        },
        {
          id: 7,
          data: {
            x: 1,
            y: 2,
            z: 3,
            alfa: 120,
            beta: 50,
            gamma: 30,
          }
        },
      ],
    }
  },
}
</script>

