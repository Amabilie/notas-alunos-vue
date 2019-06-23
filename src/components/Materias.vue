<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/materia.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Cadastro de Matérias</h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-card>
          <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img> -->

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Cadastro de Matérias</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-flex>
              <v-text-field v-model="nomeNovaMateria" label="nome da disciplina" required></v-text-field>
            </v-flex>
            <v-btn flat color="green" @click="incluirMateria(nomeNovaMateria)">Incluir</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-flex>
              <v-list>
                <v-list-tile v-for="materia in materias" :key="materia.nome" :value="materias">
                  <v-list-tile-content>
                    <v-list-tile-title v-text="materia.nome"></v-list-tile-title>
                  </v-list-tile-content>
                  <v-btn flat color="red" @click="excluirMateria(materia.nome)">Excluir</v-btn>
                  <v-btn flat color="blue" @click="editarMateria(materia.nome)">Editar</v-btn>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
var materiaService = null;

export default {
  name: "Alunos",
  data() {
    return {
      materias: [],
      nomeNovaMateria: null
    };
  },
  created: function() {
    debugger
    materiaService = this.$store.getters.materialService
    this.materias = materiaService.list();
  },
  methods: {
    teste: function() {
      console.log(this.materias);
    },
    incluirMateria: function(nomeMateria) {
      var materia = {
        nome: nomeMateria
      };

      materiaService.incluir(materia);
      this.materias = materiaService.list();
    },
    excluirMateria: function(nomeMateria) {
      materiaService.excluir(nomeMateria);
      this.materias = materiaService.list();
    },
    editarMateria: function(editarMateria){
      materiaService.editar(editarMateria);
      this.materias = mteriaService.list();
    }
  }
};
</script>

<style>
</style>
