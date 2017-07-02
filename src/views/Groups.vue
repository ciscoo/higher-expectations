<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs12 md8 class="mb-4">
      <v-card>
        <v-card-title>
          Groups
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
            v-bind:headers="headers"
            v-bind:items="items"
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
export default {
  data () {
    return {
      search: '',
      pagination: {},
      headers: [
        {
          text: 'Name',
          left: true,
          value: 'name'
        },
        {
          text: 'Description',
          left: true,
          value: 'description'
        },
        {
          text: 'Type',
          left: true,
          value: 'type'
        },
        {
          text: 'Total Members',
          value: 'members'
        }
      ],
      items: [
        {
          value: false,
          name: 'Freshman',
          members: 564,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
          type: 'Class'
        },
        {
          value: false,
          name: 'Sophomores',
          members: 123,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
          type: 'Class'
        },
        {
          value: false,
          name: 'Juniors',
          members: 623,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
          type: 'Class'
        },
        {
          value: false,
          name: 'Seniors',
          members: 450,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
          type: 'Class'
        }
      ]
    }
  }
}
</script>
