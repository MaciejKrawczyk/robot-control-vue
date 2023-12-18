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
                class="my-5"
                v-model="select"
                hint="Choose program"
                :items="items"
                item-title="state"
                item-value="abbr"
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
              <template v-slot:activator="{ props1 }">
                <v-btn
                    color="primary"
                    v-bind="props1"
                >
                  Open Dialog
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            label="Legal first name*"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            label="Legal middle name"
                            hint="example of helper text only on focus"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            label="Legal last name*"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Email*"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Password*"
                            type="password"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                      >
                        <v-select
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age*"
                            required
                        ></v-select>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                      >
                        <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Interests"
                            multiple
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
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
                      @click="dialog = false"
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
import {ref} from 'vue';

const select = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]

const dialog = ref(false)
const commands = ref([]);
// const sleeps = ref([]);
// const trajectoriesFromCurrentPosition = ref([]);
// const trajectoriesFromRegistry = ref([]);

const addSleep = () => {
  // sleeps.value.unshift('sleep');
  commands.value.unshift('sleep');
};

const addTrajectoryFromRegistry = () => {
  // trajectoriesFromRegistry.value.unshift('regTraj');
  commands.value.unshift('regTraj');
}

const addTrajectoryFromCurrentPosition = () => {
  // trajectoriesFromCurrentPosition.value.unshift('currTraj');
  commands.value.unshift('currTraj');
}

</script>

<script lang="ts">
export default {
  data () {
    return {
      dialog: false,
      select: { state: 'Florida', abbr: 'FL' },
      items: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' },
      ],
    }
  },
}
</script>