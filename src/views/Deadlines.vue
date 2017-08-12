<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs12 md8 class="mb-4">
      <v-card>
        <v-card-title>
          Deadlines
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
          v-bind:headers="deadlinesTableheaders"
          v-bind:items="deadlinesTableItems"
          v-bind:search="search"
        >
          <template slot="items" scope="props">
            <td>
              <v-edit-dialog
                @open="props.item._title = props.item.title"
                @cancel="props.item.title = props.item._title || props.item.title"
                lazy
              > {{ props.item.title }}
                <v-text-field
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.title"
                  v-on:change="val => props.item.name = val"
                  single-line counter="counter"
                ></v-text-field>
              </v-edit-dialog>
            </td>
            <td>{{ props.item.description }}</td>
            <td>{{ props.item.assignee }}</td>
            <td class="text-xs-right">{{ props.item.points }}</td>
            <td v-if="props.item.validation[0]"> Check In: &#10004 <br>Self Complete: </td>
            <td v-else> Check In: <br>Self Complete:&#10004 </td>
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
  import {UPDATE_DEADLINES_SEARCH} from '../store/mutation-types'

  export default {
    computed: {
      ...mapGetters([
        'deadlinesTableheaders',
        'deadlinesTableItems'
      ]),
      search: {
        get () {
          return this.$store.state.deadlines.search
        },
        set (search) {
          this.$store.commit(UPDATE_DEADLINES_SEARCH, search)
        }
      }
    }
  }
</script>
