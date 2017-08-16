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
        </v-card-title>
        <v-data-table
          v-bind:headers="tasksTableheaders"
          v-bind:items="tasksTableItems"
          v-bind:search="search"
        >
          <template slot="items" scope="props">
            <td>{{ props.item.title }}</td>
            <td>{{ props.item.description }}</td>
            <td>{{ props.item.assignee }}</td>
            <td>
              <v-layout row justify-center>
                <v-dialog v-model="dialog" width = 800
                @open="props.item = props.item"
                @cancel="props.item= props._item || props.item">                 
                  <v-btn primary light slot="activator">Edit</v-btn>
                  <v-card>
                    <v-card-title>
                     <span class="headline">Edit Task</span>
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        slot="title"
                        hint="Title"
                        v-bind:value="props.item.title"                        
                        single-line counter="counter"
                      ></v-text-field>
                      <v-text-field
                        slot="description"
                        hint="Description"
                        value="value"
                        v-bind:value="props.item.description"
                        multi-line counter ="counter"
                        max = 180
                      ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="blue--text darken-1" flat v-on:click.native="dialog = false">Close</v-btn>
                      <v-btn class="blue--text darken-1" flat v-on:click.native="props.item.description = description.val">Save </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
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
