import { Component, Vue, Prop, Provide } from 'vue-property-decorator'
import Header from './header.vue';

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {

  @Provide() 
  foo = 'fooy';

  @Provide() 
  bar = 'bar';

}