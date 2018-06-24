import { Component, Vue, Prop, Provide } from 'vue-property-decorator'
import VsResults from './search-results/vs-results.vue';
import VsInput from './search-input/vs-input.vue';
import voyagerApi from './search-results/search-api';

@Component({
  components: {
    VsResults,
    VsInput
  }
})
export default class App extends Vue {

  @Provide() 
  results = [];

  async onSearch(term) {
    this.results = await voyagerApi.search(term);
  }
}