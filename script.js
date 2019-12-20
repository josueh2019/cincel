new Vue({
  el: '#appVue',
  data: {
    datos: [],
    newTarea: ''
  },
  methods: {
    addTarea: function() {
      this.datos.push({tarea: this.newTarea, completed: false});
      this.newTarea = '';
    },
    eliminarTarea: function(dato) {
      var index = this.datos.indexOf(dato);
      this.datos.splice(index, 1);
    }
}
})


