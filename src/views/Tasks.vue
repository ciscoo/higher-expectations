<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs12 md8 class="mb-4">
      <v-card>
        <v-card-title>
          Tasks
          <v-spacer></v-spacer>
          <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
          ></v-text-field>
          <v-layout row justify-center>
            <v-dialog width = 800>
              <v-btn small right primary light slot="activator" class="primary ma-3" >Add Task</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Create Task</span>
                </v-card-title>
                <form action="http://hex.mateo.io/api/tasks" method="post">
                  <div id='search' width="400px">
                    <label class="label">Name:</label>
                    <br>
                    <input type="text" name="name" :style="{ width: '700px' }" v-value-when-hidden=""/>
                  </div>
                  <div>
                    <label>Description:</label>
                    <br>
                    <textarea type="text" name="description" :style="{ width: '700px' }"></textarea>
                  </div>
                  <div>
                    <label>Due Date:</label>
                    <br>
                    <input type="date" name="dueDate" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>Web Link:</label>
                    <br>
                    <input type="text" name="webLink" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>Location:</label>
                    <br>
                    <input type="text" name="location" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>Contact Info:</label>
                    <br>
                    <input type="text" name="contactInfo" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>Points:</label>
                    <br>
                    <input type="number" name="points" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>Requirements:</label>
                    <br>
                    <input type="text" name="requirements" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>Material List:</label>
                    <br>
                    <input type="text" name="materialList" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>Audience:</label>
                    <br>
                    <input type="text" name="audience" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>District:</label>
                    <br>
                    <input type="text" name="district" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>School:</label>
                    <br>
                    <input type="text" name="school" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>Post Plans:</label>
                    <br>
                    <input type="text" name="postPlans" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>Extra Interests:</label>
                    <br>
                    <input type="text" name="extraInter" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <label>Career Interests:</label>
                    <br>
                    <input type="text" name="careerInter" :style="{ width: '700px' }"/>
                  </div>
                  <div>
                    <button type="submit" value="Save">Save</button>
                  </div>
                </form>
                <v-card-text>
                </v-card-text>
                <v-card-actions>
                  <spacer></spacer>
                  <v-btn class="blue--text darken-1">Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-card-title>
        <v-data-table
          v-bind:headers="tasksTableheaders"
          v-bind:items="tasksTableItems"
          v-bind:search="search"
        >
          <template slot="items" scope="props">
            <td>{{ props.item.title }}</td>
            <td>{{ props.item.description }}</td>
            <td>{{ props.item.dueDate }}</td>
            <td>{{ props.item.requirements }}</td>
            <td>{{ props.item.assignee }}</td>
            <td>
              <v-layout row justify-center>

                <v-dialog v-model="dialog" width = 800 @open="props.item = props.item" @cancel="props.item= props._item || props.item">
                  <v-btn icon slot="activator">
                    <v-icon dark>edit</v-icon>
                  </v-btn>
                  <v-card>
                    <v-card-title>
                     <span class="headline">Edit Task</span>
                    </v-card-title>
                    <v-divider></v-divider>
                    <div style="overflow:scroll; height: 300px">
                    <v-card-text>
                      <v-text-field
                        slot="name"
                        hint="Name"
                        lable="Name"
                        v-bind:value="props.item.name"
                        persistent-hint
                      ></v-text-field>
                      <v-text-field
                        slot="description"
                        hint="Description"
                        multi-line
                        v-bind:value="props.item.description"
                        persistent-hint
                      ></v-text-field>
                      <v-text-field
                        slot="dueDate"
                        type="date"
                        hint="Due Date"
                        v-bind:value="props.item.dueDate"
                        persistent-hint
                      ></v-text-field>
                      <v-text-field
                        slot="webLink"
                        hint="Web Link"
                        v-bind:value="props.item.webLink"
                        persistent-hint
                      ></v-text-field>
                      <v-text-field
                        slot="location"
                        hint="Location"
                        v-bind:value="props.item.location"
                        persistent-hint
                      ></v-text-field>

                      <v-text-field
                        slot="contactInfo"
                        hint="Contact Info"
                        v-bind:value="props.item.contactInfo"
                        persistent-hint
                      ></v-text-field>
                      <v-text-field
                        type="number"
                        min="1"
                        max="100000"
                        slot="points"
                        hint="Points"
                        v-bind:value="props.item.points"
                        persistent-hint
                      ></v-text-field>
                      <v-text-field
                        slot="requirements"
                        hint="Requirements"
                        v-bind:value="props.item.requirements"
                        persistent-hint
                      ></v-text-field>
                      <v-text-field
                        slot="materialList"
                        hint="Material List"
                        v-bind:value="props.item.materialList"
                        persistent-hint
                      ></v-text-field>
                      <v-text-field
                        slot="audience"
                        hint="Audience"
                        v-bind:value="props.item.audience"
                        persistent-hint
                      ></v-text-field>
                      <v-text-field
                        slot="district"
                        hint="District"
                        v-bind:value="props.item.district"
                        persistent-hint
                      ></v-text-field>
                      <v-text-field
                        slot="school"
                        hint="School"
                        v-bind:value="props.item.school"
                        persistent-hint
                      ></v-text-field>
                    </v-card-text>
                    </div>
                  </v-card>
                </v-dialog>
              </v-layout>
            </td>
            <td>
              <v-btn icon slot="activator">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
          <template slot="pageText" scope="{ pageStart, pageStop }">
            From {{ pageStart }} to {{ pageStop }}
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { UPDATE_TASKS_SEARCH } from '../store/mutation-types'

  export default {
    computed: {
      ...mapGetters([
        'tasksTableheaders',
        'tasksTableItems'
      ]),
      search: {
        get () {
          return this.$store.state.tasks.search
        },
        set (search) {
          this.$store.commit(UPDATE_TASKS_SEARCH, search)
        }
      }
    }
  }
</script>

