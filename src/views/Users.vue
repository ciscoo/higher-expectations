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
                @open="props.item._firstName = props.item.firstName"
                @cancel="props.item.firstName = props.item._name || props.item.firstName"
                lazy
              > {{ props.item.firstName }}
                <v-text-field
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.firstName"
                  v-on:change="val => props.item.firstName = val"
                  single-line counter="counter"
                  ></v-text-field>
              </v-edit-dialog>
            </td>

            <td>
              <v-edit-dialog
                @open="props.item._lastName = props.item.lastName"
                @cancel="props.item.lastName = props.item._lastName || props.item.lastName"
                lazy
              > {{ props.item.lastName }}
                <v-text-field
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.lastName"
                  v-on:change="val => props.item.lastName = val"
                  single-line counter="counter"
                ></v-text-field>
              </v-edit-dialog>
            </td>

            <td>
              <v-edit-dialog
                @open="props.item._school = props.item.school"
                @cancel="props.item.school = props.item._school || props.item.school"
                lazy
              > {{ props.item.school }}
                <v-text-field
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.school"
                  v-on:change="val => props.item.school = val"
                  single-line counter="counter"
                ></v-text-field>
              </v-edit-dialog>
              </td>
            <td>{{ props.item.email }}</td>
            <td>
              <v-edit-dialog
                @open="props.item._counselor = props.item.counselor"
                @cancel="props.item.counselor = props.item._counselor || props.item.counselor"
                lazy
              > {{ props.item.counselor }}
                <v-text-field
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.counselor"
                  v-on:change="val => props.item.counselor = val"
                  single-line counter="counter"
                ></v-text-field>
              </v-edit-dialog>
            </td>

            <td> {{ props.item.yearInSchool }} </td>

            <td class="text-xs-right">
              <v-edit-dialog
                @open="props.item._points = props.item.points"
                @cancel="props.item.points = props.item._points || props.item.points"
                lazy
              > {{ props.item.points }}
                <v-text-field
                  slot="input"
                  label="Edit"
                  v-bind:value="props.item.points"
                  v-on:change="val => props.item.points = val"
                  single-line counter="counter"
                ></v-text-field>
              </v-edit-dialog>
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
