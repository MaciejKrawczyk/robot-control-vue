<template>
  <div class="flex items-center flex-col">

    <h1 class="text-3xl font-bold my-10">Program</h1>

    <div class="w-full">

      <div class="w-full h-auto bg-gray-200 flex items-center flex-col p-4">


        <div
            v-for="(cmd, index) in commands"
            :key="index"
            class="w-full"
        >
          <div
              v-if="cmd === 'sleep'"
              class="w-full bg-amber-200 h-auto mb-2 flex items-center justify-between p-2 rounded-lg"
          >
            <div class="w-1/3 text-center">{{ cmd }}</div>
            <v-select
                density="compact"
                label="Number of seconds"
                :items="[1,2,3,4,5,6,7]"
                hint="Choose the number of seconds to sleep"
                persistent-hint
            ></v-select>
            <v-btn size="small" class="ml-2">
              X
            </v-btn>
          </div>

          <div
              v-if="cmd === 'regTraj'"
              class="w-full bg-amber-300 h-auto mb-2 flex items-center justify-between p-2 rounded-lg"
          >
            <div class="w-1/3 text-center">{{ cmd }}</div>
            <v-select
                density="compact"
                label="Registry ID"
                :items="[1,2,3,4,5,6,7]"
                hint="Choose the Registry ID"
                persistent-hint
            ></v-select>
            <v-btn size="small" class="ml-2">
              X
            </v-btn>
          </div>

          <div
              v-if="cmd === 'currTraj'"
              class="w-full bg-amber-400 h-auto mb-2 flex items-center justify-between p-2 rounded-lg"
          >
            <div class="w-1/3 text-center">{{ cmd }}</div>
            <v-btn size="small" class="ml-2">
              X
            </v-btn>
          </div>
        </div>
      </div>

      <v-bottom-sheet>
        <template v-slot:activator="{ props }">
          <div class="flex justify-around w-full items-center mt-2">
            <v-btn v-bind="props" text="Insert command"></v-btn>
            <v-btn variant="outlined" icon="" size="x-large">RUN</v-btn>
          </div>
          <div>
            <v-select
                v-model="selectedItem"
                class="my-5"
                hint="Choose program"
                :items="items"
                item-title="name"
                item-value="description"
                label="Select"
                persistent-hint
                return-object
                single-line
            ></v-select>
            <v-dialog
                v-model="dialog"
                persistent
                width="1024"
            >
              <template v-slot:activator="{ props }">
                <div class="flex justify-between w-full">
                  <v-btn
                      color="primary"
                      v-bind="props"
                  >
                    Add new Program
                  </v-btn>
                  <v-btn @click.prevent="deleteProgram">
                    DELETE PROGRAM
                  </v-btn>
                </div>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">New Program</span>
                </v-card-title>
                <v-card-text>
                  <v-form validate-on="submit lazy" @submit.prevent="submitForm">
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                              v-model="name"
                              name="name"
                              label="Name*"
                              hint="Name of the program"
                              persistent-hint
                              required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                              v-model="description"
                              name="description"
                              label="Description"
                              hint="Short description of the program"
                              persistent-hint
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="submitForm"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>

        <v-card>
          <v-card-title>
            <span class="text-h5">Available commands</span>
          </v-card-title>
          <v-card-text class="flex justify-around flex-col mb-4">
            <v-btn size="large" class="mb-4" @click="addTrajectoryFromRegistry">
              from registry
            </v-btn>
            <v-btn size="large" class="mb-4" @click="addTrajectoryFromCurrentPosition">
              from current position
            </v-btn>
            <v-btn size="large" class="mb-4" @click="addSleep">
              sleep
            </v-btn>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>

    </div>

  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, watch} from 'vue';

const dialog = ref(false);
const commands = ref([]);
const name = ref('');
const description = ref('');
const selectedItem = ref(null);
const items = ref([]);

watch(selectedItem, (newVal) => {
  if (newVal && newVal.id) {
    fetchCommands(newVal.id);
  }
});

const fetchPrograms = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/program');
    const data = await response.json();
    items.value = data;
  } catch (error) {
    console.error('Error:', error);
  }
};

const fetchCommands = async (programId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/command?program_id=${programId}`);
    const data = await response.json();
    commands.value = data;
    console.log(data)
  } catch (error) {
    console.error('Error:', error);
  }
};

onMounted(fetchPrograms);

const deleteProgram = async () => {
  if (selectedItem.value && selectedItem.value.id) {
    try {
      const response = await fetch('http://localhost:5000/api/program', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: selectedItem.value.id}),
      });
      const data = await response.json();
      console.log('Program deleted:', data);
      fetchPrograms();
      selectedItem.value = null;
    } catch (error) {
      console.error('Error deleting program:', error);
    }
  } else {
    console.error('No program selected');
  }
};

const submitForm = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/program', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: name.value, description: description.value}),
    });
    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    dialog.value = false;
    fetchPrograms();
  }
};

const addCommand = (command) => {
  commands.value.unshift(command);
};

const addSleep = () => addCommand('sleep');
const addTrajectoryFromRegistry = () => addCommand('regTraj');
const addTrajectoryFromCurrentPosition = () => addCommand('currTraj');
</script>

<script lang="ts">
export default {
  data() {
    return {
      dialog: false,
      items: [],
      // selectedItem: null
    }
  },
  methods: {}
}
</script>