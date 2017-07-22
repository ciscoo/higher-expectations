<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs12 md8 class="mb-4">
      <v-card>
        <v-card-title>
          Users
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
          v-bind:headers="usersTableheaders"
          v-bind:items="usersTableItems"
          v-bind:search="search"
        >
          <template slot="items" scope="props">
            <td>
              <v-edit-dialog
                @open="props.item._name = props.item.name"
                @cancel="props.item.name = props.item._name || props.item.name"
                lazy
              > {{ props.item.name }}
                <v-text-field>
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.name"
                  v-on:change="val => props.item.name = val"
                  single-line counter="counter"
                </v-text-field>
              </v-edit-dialog>
            </td>
            <td>{{ props.item.description }}</td>
            <td>{{ props.item.type }}</td>
            <td class="text-xs-right">{{ props.item.members }}</td>
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
  import { UPDATE_USER_SEARCH } from '../store/mutation-types'

  export default {
    computed: {
      ...mapGetters([
        'usersTableheaders',
        'usersTableItems'
      ]),
      search: {
        get () {
          return this.$store.state.users.search
        },
        set (search) {
          this.$store.commit(UPDATE_USER_SEARCH, search)
        }
      }
    }
  }
</script>
