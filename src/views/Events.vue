<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs12 md8 class="mb-4">
      <v-card>
        <v-btn
          class="light-blue"
          light
          small
          fixed
          fab
        >
          <v-icon>add
          </v-icon>
        </v-btn>
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
