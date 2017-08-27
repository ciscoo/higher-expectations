<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs12 md8 class="mb-4">
      <v-card>
        <v-card-title>
          Events
          <v-spacer></v-spacer>
          <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
          ></v-text-field>
          <v-btn small right primary light slot="activator" class="primary ma-3" >Add Event</v-btn>
        </v-card-title>
        <v-data-table
          v-bind:headers="eventsTableheaders"
          v-bind:items="eventsTableItems"
          v-bind:search="search"
        >
          <template slot="items" scope="props">
            <td>
              <v-edit-dialog
                @open="props.item._name = props.item.name"
                @cancel="props.item.name = props.item._name || props.item.name"
                lazy
              > {{ props.item.name }}
                <v-text-field
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.name"
                  v-on:change="val => props.item.name = val"
                  single-line counter="counter"
                ></v-text-field>
              </v-edit-dialog>
            </td>

            <td>
              <v-edit-dialog
                @open="props.item._description = props.item.description"
                @cancel="props.item.description = props.item._description || props.item.description"
                lazy
              > {{ props.item.description }}
                <v-text-field
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.description"
                  v-on:change="val => props.item.description = val"
                  single-line counter="counter"
                ></v-text-field>
              </v-edit-dialog>
              </td>

            <td>
              <v-edit-dialog
                @open="props.item._location = props.item.location"
                @cancel="props.item.location = props.item._location || props.item.location"
                lazy
              > {{ props.item.location }}
                <v-text-field
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.location"
                  v-on:change="val => props.item.location = val"
                  single-line counter="counter"
                ></v-text-field>
              </v-edit-dialog>
              </td>

            <td>
              <v-edit-dialog
                @open="props.item._startDate = props.item.startDate"
                @cancel="props.item.startDate = props.item._startDate || props.item.startDate"
                lazy
              > {{ props.item.startDate }}
                <v-text-field
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.startDate"
                  v-on:change="val => props.item.startDate = val"
                  single-line counter="counter"
                ></v-text-field>
              </v-edit-dialog>
            </td>
            <td class="text-xs-right">{{ props.item.points }}</td>
            <v-layout row justify-center>

              <v-dialog v-model="dialog" width = 800
              @open="props.item = props.item"
              @cancel="props.item= props._item || props.item">
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
                      slot="startDate"
                      type="date"
                      hint="Start Date"
                      v-bind:value="props.item.startDate"
                      persistent-hint
                    ></v-text-field>
                    <v-text-field
                      slot="endDate"
                      type="date"
                      hint="End Date"
                      v-bind:value="props.item.endDate"
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
  import { UPDATE_EVENTS_SEARCH } from '../store/mutation-types'

  export default {
    computed: {
      ...mapGetters([
        'eventsTableheaders',
        'eventsTableItems'
      ]),
      search: {
        get () {
          return this.$store.state.events.search
        },
        set (search) {
          this.$store.commit(UPDATE_EVENTS_SEARCH, search)
        }
      }
    }
  }
</script>
