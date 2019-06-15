<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>EXAT</span>
        <span class="font-weight-light">Projeto VUE</span>
      </v-toolbar-title>
      <div class="text-xs-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Cadastros</v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="(item, index) in items" :key="index" @click>
              <v-list-tile-title v-on:click="item.navigate()">{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!-- <HelloWorld/> -->
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import router from "./router";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      items: [
        {
          title: "Alunos",
          navigate: () => {
            router.push({ name: "Alunos" });
          }
        },
        {
          title: "Matérias",
          navigate: () => {
            router.push({ name: "Materias" });
          }
        },
        {
          title: "Provas",
          navigate: () => {
            router.push({ name: "Provas" });
          }
        }
      ]
    };
  }
};
</script>
