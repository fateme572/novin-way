<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-row align="center">
        <v-col cols="auto">
          <span>Search by release date:</span>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="date"
            solo
            readonly
            hide-details
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>
    <v-date-picker v-model="date" range color="#11b980">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    rangeDate: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      date: [],
      menu: false,
    };
  },
  watch: {
    // Every time the range date changes, the parent becomes aware of it
    date(value) {
      this.$emit("update:rangeDate", value);
    },
  },
};
</script>