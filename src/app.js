import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            fullList: [],
            chosenCountry: {
                name: "",
                population: "",
                flag: ""
            }
        },
        computed: {
            totalPopulation: function () {
                return this.fullList.reduce(
                    (runningTotal, country) => runningTotal + country.population
                , 0)
            },
        },
        mounted() {
            this.fetchAll();
        },
        methods: {
          fetchAll: function () {
              fetch('https://restcountries.eu/rest/v2/all')
              .then(res => res.json())
              .then(data => this.fullList = data)
              .catch(err => console.error(err));
          },
          clickedCountry: function (country) {
              this.chosenCountry.name = country.name;
              this.chosenCountry.population = country.population;
              this.chosenCountry.flag = country.flag;
          }
        }
    })
})